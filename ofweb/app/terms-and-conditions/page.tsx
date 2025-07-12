export default function TermsAndConditions() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16">
      <h1 className="text-4xl font-bold mb-6">Terms and Conditions</h1>
      <p className="max-w-2xl text-lg text-center mb-4">
        By accessing and using this website, you agree to the following terms and conditions. Please read them carefully. If you do not agree, please do not use this site.
      </p>
      <ul className="max-w-2xl text-left list-disc pl-6 text-base">
        <li>All content is for informational purposes only and may be updated at any time.</li>
        <li>You may not use this site for unlawful purposes or to infringe on the rights of others.</li>
        <li>We reserve the right to modify or terminate the site or your access at any time.</li>
        <li>Contact us at hello@gaia.com for any questions regarding these terms.</li>
      </ul>
    </div>
  );
} 