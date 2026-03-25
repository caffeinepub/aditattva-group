import {
  AlertCircle,
  CheckCircle2,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useSubmitContact } from "../hooks/useQueries";

const SUBJECTS = [
  "Technology Services",
  "Engineering Services",
  "R&D & Innovation",
  "Consulting & Strategy",
  "Partnership",
  "Careers",
  "General Inquiry",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const mutation = useSubmitContact();

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await mutation.mutateAsync(form);
      setSubmitted(true);
      toast.success("Message sent! We'll get back to you soon.");
    } catch {
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <div>
      <section
        className="pt-[72px] pb-16 min-h-[280px] flex items-end"
        style={{
          background:
            "linear-gradient(135deg, oklch(var(--navy-dark)) 0%, oklch(0.22 0.06 230) 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-14">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "oklch(var(--teal))" }}
          >
            Get In Touch
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            Contact Us
          </h1>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14">
            {/* Form */}
            <div>
              <h2 className="text-xl font-bold text-navy-dark mb-6">
                Send Us a Message
              </h2>

              {submitted ? (
                <div
                  className="rounded-xl p-10 flex flex-col items-center text-center gap-4"
                  style={{ background: "oklch(var(--navy-mid))" }}
                  data-ocid="contact.success_state"
                >
                  <CheckCircle2
                    className="w-14 h-14"
                    style={{ color: "oklch(var(--teal))" }}
                  />
                  <h3 className="text-white font-bold text-lg">
                    Message Received!
                  </h3>
                  <p className="text-brand-muted text-sm">
                    Thank you for reaching out to Aditattva Group. Our team will
                    review your inquiry and respond within 24 business hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setForm({
                        name: "",
                        email: "",
                        phone: "",
                        subject: "",
                        message: "",
                      });
                    }}
                    className="px-6 py-2.5 rounded-lg text-white font-semibold text-sm uppercase tracking-wide"
                    style={{ background: "oklch(var(--teal))" }}
                    data-ocid="contact.button"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                  data-ocid="contact.panel"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="text-xs font-semibold uppercase tracking-wide text-navy-dark block mb-1.5"
                      >
                        Full Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Rajesh Kumar"
                        className="w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:ring-2 transition-shadow"
                        style={{ borderColor: "oklch(var(--navy-mid) / 0.3)" }}
                        data-ocid="contact.input"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="text-xs font-semibold uppercase tracking-wide text-navy-dark block mb-1.5"
                      >
                        Email Address *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="rajesh@company.com"
                        className="w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:ring-2 transition-shadow"
                        style={{ borderColor: "oklch(var(--navy-mid) / 0.3)" }}
                        data-ocid="contact.input"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="text-xs font-semibold uppercase tracking-wide text-navy-dark block mb-1.5"
                      >
                        Phone Number
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91-XXXXX-XXXXX"
                        className="w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:ring-2 transition-shadow"
                        style={{ borderColor: "oklch(var(--navy-mid) / 0.3)" }}
                        data-ocid="contact.input"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-subject"
                        className="text-xs font-semibold uppercase tracking-wide text-navy-dark block mb-1.5"
                      >
                        Subject *
                      </label>
                      <select
                        id="contact-subject"
                        name="subject"
                        required
                        value={form.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border text-sm bg-white focus:outline-none focus:ring-2 transition-shadow"
                        style={{ borderColor: "oklch(var(--navy-mid) / 0.3)" }}
                        data-ocid="contact.select"
                      >
                        <option value="">Select subject…</option>
                        {SUBJECTS.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="text-xs font-semibold uppercase tracking-wide text-navy-dark block mb-1.5"
                    >
                      Message *
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project or inquiry…"
                      className="w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:ring-2 transition-shadow resize-none"
                      style={{ borderColor: "oklch(var(--navy-mid) / 0.3)" }}
                      data-ocid="contact.textarea"
                    />
                  </div>

                  {mutation.isError && (
                    <div
                      className="flex items-center gap-2 text-sm px-4 py-3 rounded-lg"
                      style={{
                        background: "oklch(0.95 0.02 30)",
                        color: "oklch(0.5 0.18 27)",
                      }}
                      data-ocid="contact.error_state"
                    >
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      Failed to send. Please try again or email us directly.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={mutation.isPending}
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-lg text-white font-semibold text-sm uppercase tracking-wide transition-all hover:scale-[1.01] disabled:opacity-70"
                    style={{ background: "oklch(var(--teal))" }}
                    data-ocid="contact.submit_button"
                  >
                    {mutation.isPending ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" /> Sending…
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" /> Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-bold text-navy-dark mb-6">
                  Contact Information
                </h2>
                <div className="space-y-5">
                  <div className="flex gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: "oklch(var(--navy-mid))" }}
                    >
                      <MapPin
                        className="w-5 h-5"
                        style={{ color: "oklch(var(--teal))" }}
                      />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-navy-dark mb-0.5">
                        Headquarters
                      </p>
                      <p className="text-gray-600 text-sm">
                        Ranchi, Jharkhand, India — 834001
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: "oklch(var(--navy-mid))" }}
                    >
                      <Mail
                        className="w-5 h-5"
                        style={{ color: "oklch(var(--teal))" }}
                      />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-navy-dark mb-0.5">
                        Email
                      </p>
                      <a
                        href="mailto:info@aditattva.com"
                        className="text-sm transition-colors"
                        style={{ color: "oklch(var(--teal))" }}
                      >
                        info@aditattva.com
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: "oklch(var(--navy-mid))" }}
                    >
                      <Phone
                        className="w-5 h-5"
                        style={{ color: "oklch(var(--teal))" }}
                      />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-navy-dark mb-0.5">
                        Phone
                      </p>
                      <a
                        href="tel:+919876543210"
                        className="text-sm transition-colors"
                        style={{ color: "oklch(var(--teal))" }}
                      >
                        +91-98765-43210
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div
                className="rounded-xl overflow-hidden border"
                style={{ borderColor: "oklch(var(--navy-mid) / 0.2)" }}
              >
                <iframe
                  title="Ranchi, Jharkhand, India"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14763.37743538!2d85.3096!3d23.3441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e104aa5db7dd%3A0xdc09d49d6899f43e!2sRanchi%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1680000000000"
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
