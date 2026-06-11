
import React, { useState } from "react";
import { submitNetlifyFormWithFiles } from "@/lib/netlifyForms";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { translations } from "@/components/translations";
import { Upload, CheckCircle, FileText } from "lucide-react";

export default function ApplicationForm({ language }) {
  const t = translations[language];
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    position: '',
    experience_level: '',
    location: '',
    remote_preference: '',
    cover_letter: '',
    linkedin_url: '',
    portfolio_url: '',
    availability: '',
    language: language
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [resumeFile, setResumeFile] = useState(null);
  const [isUploadingResume, setIsUploadingResume] = useState(false);
  const [hasError, setHasError] = useState(false);

  const errorMessages = {
    en: "Something went wrong submitting your application. Please try again, or email us at hello@pawadata.com.",
    fr: "Une erreur s'est produite lors de l'envoi de votre candidature. Veuillez réessayer ou nous écrire à hello@pawadata.com.",
    es: "Algo salió mal al enviar tu solicitud. Inténtalo de nuevo o escríbenos a hello@pawadata.com.",
    pt: "Ocorreu um erro ao enviar sua candidatura. Tente novamente ou escreva para hello@pawadata.com.",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!resumeFile) {
      alert(t.careersResumeRequired);
      return;
    }

    setIsSubmitting(true);
    setHasError(false);

    try {
      await submitNetlifyFormWithFiles("job-application", formData, { resume: resumeFile });
      setIsSubmitted(true);
      setFormData({
        full_name: '',
        email: '',
        phone: '',
        position: '',
        experience_level: '',
        location: '',
        remote_preference: '',
        cover_letter: '',
        linkedin_url: '',
        portfolio_url: '',
        availability: '',
        language: language
      });
      setResumeFile(null);
    } catch (error) {
      console.error('Error submitting application:', error);
      setHasError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Validate file type and size
    const allowedTypes = ['.pdf', '.doc', '.docx'];
    const fileExtension = '.' + file.name.split('.').pop().toLowerCase();
    
    if (!allowedTypes.includes(fileExtension)) {
      alert(t.careersInvalidFileType);
      return;
    }

    if (file.size > 5 * 1024 * 1024) { // 5MB limit
      alert(t.careersFileTooLarge);
      return;
    }

    setIsUploadingResume(true);
    try {
      // The file is attached directly to the form submission (multipart),
      // so we just stash it locally — no separate upload round-trip.
      setResumeFile(file);
    } catch (error) {
      console.error('Error attaching file:', error);
      alert(t.careersUploadError);
    } finally {
      setIsUploadingResume(false);
    }
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  React.useEffect(() => {
    setFormData(prev => ({ ...prev, language }));
  }, [language]);

  if (isSubmitted) {
    return (
      <section id="application" className="py-20 bg-gradient-to-b from-white to-blue-50/30">
        <div className="max-w-2xl mx-auto px-4">
          <Card className="border-0 shadow-xl bg-white">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                {t.careersSuccessTitle}
              </h3>
              <p className="text-gray-600 mb-4">
                {t.careersSuccessMessage}
              </p>
              <Button 
                onClick={() => setIsSubmitted(false)}
                variant="outline"
                className="w-full"
              >
                {t.careersSuccessButton}
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="application" className="py-20 bg-gradient-to-b from-white to-blue-50/30">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {t.careersApplicationTitle}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t.careersApplicationDesc}
          </p>
        </div>

        <Card className="border-0 shadow-xl bg-white">
          <CardHeader>
            <CardTitle className="text-2xl text-gray-900">
              {t.careersApplicationFormTitle}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form
              name="job-application"
              method="POST"
              data-netlify="true"
              encType="multipart/form-data"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="job-application" />
              <p className="hidden">
                <label>
                  Don't fill this out: <input name="bot-field" />
                </label>
              </p>
              {/* Personal Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="full_name" className="text-sm font-medium text-gray-900 mb-2 block">
                    {t.careersFullName}
                  </Label>
                  <Input
                    id="full_name"
                    required
                    value={formData.full_name}
                    onChange={(e) => handleChange('full_name', e.target.value)}
                    className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-gray-900 mb-2 block">
                    {t.careersEmail}
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
                  <Label htmlFor="phone" className="text-sm font-medium text-gray-900 mb-2 block">
                    {t.careersPhone}
                  </Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <Label htmlFor="location" className="text-sm font-medium text-gray-900 mb-2 block">
                    {t.careersLocation}
                  </Label>
                  <Input
                    id="location"
                    value={formData.location}
                    onChange={(e) => handleChange('location', e.target.value)}
                    className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="City, Province/State"
                  />
                </div>
              </div>

              {/* Position Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label className="text-sm font-medium text-gray-900 mb-2 block">
                    {t.careersPosition}
                  </Label>
                  <Select value={formData.position} onValueChange={(value) => handleChange('position', value)} required>
                    <SelectTrigger className="border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                      <SelectValue placeholder={t.careersSelectPosition} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="data-engineer">{t.jobDataEngineerTitle}</SelectItem>
                      <SelectItem value="data-architect">{t.jobDataArchitectTitle}</SelectItem>
                      <SelectItem value="data-pipeline-specialist">{t.jobDataPipelineTitle}</SelectItem>
                      <SelectItem value="analytics-consultant">{t.jobAnalyticsConsultantTitle}</SelectItem>
                      <SelectItem value="ml-engineer">ML Engineer</SelectItem>
                      <SelectItem value="project-manager">Project Manager</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="text-sm font-medium text-gray-900 mb-2 block">
                    {t.careersExperienceLevel}
                  </Label>
                  <Select value={formData.experience_level} onValueChange={(value) => handleChange('experience_level', value)} required>
                    <SelectTrigger className="border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                      <SelectValue placeholder={t.careersSelectExperience} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="junior">Junior (0-2 years)</SelectItem>
                      <SelectItem value="mid">Mid-level (3-5 years)</SelectItem>
                      <SelectItem value="senior">Senior (6+ years)</SelectItem>
                      <SelectItem value="lead">Lead/Principal (10+ years)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label className="text-sm font-medium text-gray-900 mb-2 block">
                    {t.careersRemotePreference}
                  </Label>
                  <Select value={formData.remote_preference} onValueChange={(value) => handleChange('remote_preference', value)}>
                    <SelectTrigger className="border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                      <SelectValue placeholder={t.careersSelectRemote} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="remote">Fully Remote</SelectItem>
                      <SelectItem value="hybrid">Hybrid</SelectItem>
                      <SelectItem value="onsite">On-site</SelectItem>
                      <SelectItem value="flexible">Flexible</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="availability" className="text-sm font-medium text-gray-900 mb-2 block">
                    {t.careersAvailability}
                  </Label>
                  <Input
                    id="availability"
                    value={formData.availability}
                    onChange={(e) => handleChange('availability', e.target.value)}
                    className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Immediately / 2 weeks / 1 month"
                  />
                </div>
              </div>

              {/* Resume Upload */}
              <div>
                <Label className="text-sm font-medium text-gray-900 mb-2 block">
                  {t.careersResume} *
                </Label>
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-blue-400 transition-colors">
                  <input
                    type="file"
                    id="resume"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                  <label htmlFor="resume" className="cursor-pointer">
                    {resumeFile ? (
                      <div className="flex items-center justify-center gap-2 text-green-600">
                        <FileText className="w-6 h-6" />
                        <span className="font-medium">{resumeFile.name}</span>
                      </div>
                    ) : (
                      <div>
                        <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-gray-600 font-medium">{t.careersUploadResume}</p>
                        <p className="text-sm text-gray-500 mt-1">{t.careersFileFormats}</p>
                      </div>
                    )}
                  </label>
                  {isUploadingResume && (
                    <div className="mt-2">
                      <div className="text-sm text-blue-600">{t.careersUploading}</div>
                    </div>
                  )}
                </div>
              </div>

              {/* Links */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="linkedin_url" className="text-sm font-medium text-gray-900 mb-2 block">
                    {t.careersLinkedIn}
                  </Label>
                  <Input
                    id="linkedin_url"
                    type="url"
                    value={formData.linkedin_url}
                    onChange={(e) => handleChange('linkedin_url', e.target.value)}
                    className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="https://linkedin.com/in/yourprofile"
                  />
                </div>

                <div>
                  <Label htmlFor="portfolio_url" className="text-sm font-medium text-gray-900 mb-2 block">
                    {t.careersPortfolio}
                  </Label>
                  <Input
                    id="portfolio_url"
                    type="url"
                    value={formData.portfolio_url}
                    onChange={(e) => handleChange('portfolio_url', e.target.value)}
                    className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="https://github.com/yourusername"
                  />
                </div>
              </div>

              {/* Cover Letter */}
              <div>
                <Label htmlFor="cover_letter" className="text-sm font-medium text-gray-900 mb-2 block">
                  {t.careersCoverLetter}
                </Label>
                <Textarea
                  id="cover_letter"
                  value={formData.cover_letter}
                  onChange={(e) => handleChange('cover_letter', e.target.value)}
                  className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 min-h-[120px] resize-y"
                  placeholder={t.careersCoverLetterPlaceholder}
                />
              </div>

              {hasError && (
                <p role="alert" className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                  {errorMessages[language] || errorMessages.en}
                </p>
              )}

              <Button
                type="submit"
                disabled={isSubmitting || isUploadingResume}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
              >
                {isSubmitting ? t.careersSubmitting : t.careersSubmitApplication}
                <Upload className="w-5 h-5 ml-2" />
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
