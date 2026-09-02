
import React, { useRef, useState } from "react";
import { submitNetlifyForm } from "@/lib/netlifyForms";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { translations } from "@/components/translations";
import { EVENTS, track, makeStartTracker } from "@/lib/analytics";
import { Send, CheckCircle, Mail, Phone, MapPin } from "lucide-react";

export default function ContactForm({ title, description, language }) {
  const t = translations[language];
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    role: '',
    timeline: '',
    message: '',
    language: language
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hasError, setHasError] = useState(false);

  const errorMessages = {
    en: "Something went wrong sending your message. Please try again, or email us at hello@pawadata.com.",
    fr: "Une erreur s'est produite lors de l'envoi de votre message. Veuillez réessayer ou nous écrire à hello@pawadata.com.",
    es: "Algo salió mal al enviar tu mensaje. Inténtalo de nuevo o escríbenos a hello@pawadata.com.",
    pt: "Ocorreu um erro ao enviar sua mensagem. Tente novamente ou escreva para hello@pawadata.com.",
  };

  // Fires once per mount, on first interaction. Paired with contact_submit this
  // is what tells us whether the form is too long, rather than guessing.
  //
  // Held in a ref deliberately. Built in the component body it would be rebuilt
  // on every render with its once-guard reset — and typing re-renders — so
  // contact_start fired on every keystroke and the abandonment rate was noise.
  const startTracker = useRef(null);
  if (!startTracker.current) {
    startTracker.current = makeStartTracker(EVENTS.CONTACT_START, { page: 'Home', language });
  }
  const trackStart = () => startTracker.current();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setHasError(false);

    try {
      await submitNetlifyForm("contact", formData);
      track(EVENTS.CONTACT_SUBMIT, {
        page: 'Home',
        language,
        role: formData.role,
        timeline: formData.timeline,
      });
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        role: '',
        timeline: '',
        message: '',
        language: language
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      track(EVENTS.CONTACT_ERROR, { page: 'Home', language });
      setHasError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field, value) => {
    trackStart();
    setFormData(prev => ({ ...prev, [field]: value }));
  };
  
  // Update form data language if prop changes
  React.useEffect(() => {
    setFormData(prev => ({ ...prev, language }));
  }, [language]);

  if (isSubmitted) {
    return (
      <Card className="max-w-md mx-auto border-0 shadow-xl bg-white">
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {t.contactSuccessTitle}
          </h3>
          <p className="text-gray-600 mb-4">
            {t.contactSuccessMessage}
          </p>
          <Button 
            onClick={() => setIsSubmitted(false)}
            variant="outline"
            className="w-full"
          >
            {t.contactSuccessButton}
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                {t.contactGetInTouch}
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">{t.contactInfoEmail}</p>
                    <p className="text-gray-600">hello@pawadata.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">{t.contactInfoPhone}</p>
                    <p className="text-gray-600">416 887 2811</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">{t.contactInfoLocation}</p>
                    <p className="text-gray-600">{t.contactInfoLocationValue}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-6">
              <h4 className="font-semibold text-gray-900 mb-2">
                {t.contactConsultationTitle}
              </h4>
              <p className="text-gray-600 text-sm">
                {t.contactConsultationDesc}
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-xl bg-white">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl text-gray-900">
                  {t.contactFormTitle}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form
                  name="contact"
                  method="POST"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <p className="hidden">
                    <label>
                      Don't fill this out: <input name="bot-field" />
                    </label>
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-sm font-medium text-gray-900 mb-2 block">
                        {t.contactFullName}
                      </Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email" className="text-sm font-medium text-gray-900 mb-2 block">
                        {t.contactEmail}
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="company" className="text-sm font-medium text-gray-900 mb-2 block">
                        {t.contactCompany}
                      </Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleChange('company', e.target.value)}
                        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Your company name"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone" className="text-sm font-medium text-gray-900 mb-2 block">
                        {t.contactPhone}
                      </Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  {/* Qualification. Both optional — the goal is a better first
                      reply, not a longer form. Labels are wired to the Radix
                      trigger ids, which renders as a button and is otherwise
                      announced with no name at all. */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="role" className="text-sm font-medium text-gray-900 mb-2 block">
                        {t.contactRole}
                      </Label>
                      <Select value={formData.role} onValueChange={(value) => handleChange('role', value)}>
                        <SelectTrigger id="role" className="border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                          <SelectValue placeholder={t.contactRolePlaceholder} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="data">{t.contactRoleData}</SelectItem>
                          <SelectItem value="technology">{t.contactRoleTech}</SelectItem>
                          <SelectItem value="operations">{t.contactRoleOps}</SelectItem>
                          <SelectItem value="finance">{t.contactRoleFinance}</SelectItem>
                          <SelectItem value="other">{t.contactRoleOther}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="timeline" className="text-sm font-medium text-gray-900 mb-2 block">
                        {t.contactTimeline}
                      </Label>
                      <Select value={formData.timeline} onValueChange={(value) => handleChange('timeline', value)}>
                        <SelectTrigger id="timeline" className="border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                          <SelectValue placeholder={t.contactTimelinePlaceholder} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="exploring">{t.contactTimelineExploring}</SelectItem>
                          <SelectItem value="quarter">{t.contactTimelineQuarter}</SelectItem>
                          <SelectItem value="active">{t.contactTimelineActive}</SelectItem>
                          <SelectItem value="urgent">{t.contactTimelineUrgent}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-sm font-medium text-gray-900 mb-2 block">
                      {t.contactMessage}
                    </Label>
                    <Textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 min-h-[120px] resize-y"
                      placeholder={t.contactMessagePlaceholder}
                    />
                  </div>

                  <div>
                    <Label htmlFor="language" className="text-sm font-medium text-gray-900 mb-2 block">
                      {t.contactLanguage}
                    </Label>
                    <Select value={formData.language} onValueChange={(value) => handleChange('language', value)}>
                      <SelectTrigger id="language" className="border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="en">{t.contactLangEn}</SelectItem>
                        <SelectItem value="fr">{t.contactLangFr}</SelectItem>
                        <SelectItem value="es">{t.contactLangEs}</SelectItem>
                        <SelectItem value="pt">{t.contactLangPt}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {hasError && (
                    <p role="alert" className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                      {errorMessages[language] || errorMessages.en}
                    </p>
                  )}

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
                  >
                    {isSubmitting ? (
                      t.contactSubmitting
                    ) : (
                      <>
                        {t.contactSubmit}
                        <Send className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
