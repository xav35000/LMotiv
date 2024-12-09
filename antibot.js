document.addEventListener('DOMContentLoaded', function() {
    const emailContainer = document.querySelector('.email');
  
    const obfuscated = ["cyriac.marles", "outlook.fr"];
    const fullEmail = obfuscated.join('@');
  
    const mailLink = document.createElement('a');
    mailLink.href = `mailto:${fullEmail}`;
    emailContainer.classList.remove('hidden-text');
    mailLink.textContent = fullEmail;
  
    emailContainer.textContent = '';
    emailContainer.appendChild(mailLink);

    const lyceeContainer = document.querySelector('.lycee');
    const lycee = 'Saint Vincent Providence'
    lyceeContainer.classList.remove('hidden-text');
    lyceeContainer.textContent = lycee;
  });
