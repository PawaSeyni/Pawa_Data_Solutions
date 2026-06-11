// Lightweight helpers for submitting to Netlify Forms from a JS-rendered SPA.
// Netlify detects the form schemas from the hidden static <form> tags in
// index.html at build time; these helpers POST the actual submissions.
// https://docs.netlify.com/forms/setup/#submit-html-forms-with-ajax

function encode(data) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key] ?? "")}`)
    .join("&");
}

// Submit a plain (non-file) form as url-encoded data.
export async function submitNetlifyForm(formName, data) {
  const res = await fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encode({ "form-name": formName, ...data }),
  });
  if (!res.ok) {
    throw new Error(`Form submission failed: ${res.status}`);
  }
  return res;
}

// Submit a form that includes a file upload as multipart/form-data.
// `fields` is a plain object; `files` is an object of { fieldName: File }.
export async function submitNetlifyFormWithFiles(formName, fields, files = {}) {
  const body = new FormData();
  body.append("form-name", formName);
  Object.entries(fields).forEach(([key, value]) => body.append(key, value ?? ""));
  Object.entries(files).forEach(([key, file]) => {
    if (file) body.append(key, file, file.name);
  });

  const res = await fetch("/", { method: "POST", body });
  if (!res.ok) {
    throw new Error(`Form submission failed: ${res.status}`);
  }
  return res;
}
