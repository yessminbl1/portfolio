import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaPaperPlane, FaSpinner, FaCheck, FaExclamationCircle } from 'react-icons/fa';

const ContactForm = () => {
  const form = useRef();
  const [status, setStatus] = useState('idle'); // idle, sending, success, error

  // IMPORTANT: Replace with your actual EmailJS IDs
  const SERVICE_ID = "service_ullaxle";
  const TEMPLATE_ID = "template_orcm3jc";
  const PUBLIC_KEY = "BQrY3if23EhdI1d4V";

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
        setStatus('success');
        form.current.reset();
        setTimeout(() => setStatus('idle'), 5000);
      }, (error) => {
        console.error(error.text);
        setStatus('error');
      });
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">

        <div className="glass-card p-8 md:p-12 rounded-3xl overflow-hidden relative">

          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Contactez-moi</h2>
            <p className="text-slate-400">Un projet ? Une idée ? Discutons-en !</p>
          </div>

          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-slate-300 text-sm font-medium mb-2">Nom</label>
                <input
                  type="text"
                  name="user_name"
                  required
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 transition-all"
                  placeholder="Votre Nom"
                />
              </div>
              <div>
                <label className="block text-slate-300 text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="user_email"
                  required
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 transition-all"
                  placeholder="votre@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-slate-300 text-sm font-medium mb-2">Message</label>
              <textarea
                name="message"
                rows="4"
                required
                className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 transition-all resize-none"
                placeholder="Dites-moi tout..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === 'sending' || status === 'success'}
              className={`w-full py-4 rounded-xl font-bold text-white transition-all flex items-center justify-center gap-2 ${status === 'success'
                ? 'bg-green-500 hover:bg-green-600'
                : status === 'error'
                  ? 'bg-red-500 hover:bg-red-600'
                  : 'bg-gradient-to-r from-indigo-600 to-pink-600 hover:opacity-90 shadow-lg shadow-indigo-600/20'
                }`}
            >
              {status === 'sending' && <><FaSpinner className="animate-spin" /> Envoi...</>}
              {status === 'success' && <><FaCheck /> Message Envoyer !</>}
              {status === 'error' && <><FaExclamationCircle /> Erreur, réessayez</>}
              {status === 'idle' && <><FaPaperPlane /> Envoyer le message</>}
            </button>
          </form>

        </div>

      </div>
    </section>
  );
};

export default ContactForm;
