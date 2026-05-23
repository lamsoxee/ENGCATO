/**
 * ==========================================================================
 * LOGIKA INTERAKTIF LANDING PAGE ENGCATO (script.js)
 * File ini berisi semua logika JavaScript untuk menu navigasi, efek scroll,
 * dan modal pop-up pendaftaran Free Trial yang interaktif.
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {

  // --- 1. TOGGLE MENU HAMBURGER (RESPONSIVE MENU DI HP) ---
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      // Toggle class 'active' untuk menampilkan/menyembunyikan menu navigasi
      navMenu.classList.toggle('active');
      
      // Mengubah ikon hamburger (bars) menjadi ikon silang (xmark) ketika menu aktif
      const icon = menuToggle.querySelector('i');
      if (navMenu.classList.contains('active')) {
        icon.className = 'fa-solid fa-xmark';
      } else {
        icon.className = 'fa-solid fa-bars';
      }
    });
  }

  // --- 2. MENUTUP NAV MENU SECARA OTOMATIS SAAT TAUTAN DIKLIK ---
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        if (menuToggle) {
          menuToggle.querySelector('i').className = 'fa-solid fa-bars';
        }
      }
    });
  });

  // --- 3. EFEK NAVBAR SHADOW SAAT DI-SCROLL ---
  window.addEventListener('scroll', () => {
    const header = document.querySelector('.navbar-container');
    if (header) {
      if (window.scrollY > 20) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  });

  // --- 4. ALUR PENGALIHAN TOMBOL (SMOOTH SCROLL KE CTA WHATSAPP DI BAWAH) ---
  const ctaWhatsappBtn = document.getElementById('cta-whatsapp');
  const freeTrialCard = document.getElementById('price-free');
  
  // Ambil semua tombol dengan class btn-scroll-to-cta dan kartu interaktif
  const btnScrolls = document.querySelectorAll('.btn-scroll-to-cta');
  const featureCards = document.querySelectorAll('.feature-card');
  const tutorCards = document.querySelectorAll('.tutor-card');

  // Fungsi helper untuk scroll halus ke tombol Uji Coba Paling Bawah (CTA WhatsApp)
  const scrollToFreeTrial = (e) => {
    e.preventDefault();
    if (ctaWhatsappBtn) {
      ctaWhatsappBtn.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else if (freeTrialCard) {
      freeTrialCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  // Fungsi helper untuk membuka WhatsApp dengan pesan otomatis terstruktur
  const openWhatsApp = (e) => {
    e.preventDefault();
    const phoneNumber = "6282136288719";
    const message = "Halo ENGCATO! 👋 Anak saya baru saja mencoba simulator belajar bareng Cato di website dan suka sekali! 🐈✨ Saya tertarik mendaftarkan anak saya untuk program Free Trial. Mohon informasi langkah selanjutnya ya, terima kasih! 😸";
    const encodedMessage = encodeURIComponent(message);
    const waUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
    window.open(waUrl, '_blank');
  };

  // Pasang event listener ke tombol konversi paling bawah (kirim pesan WA)
  if (ctaWhatsappBtn) {
    ctaWhatsappBtn.addEventListener('click', openWhatsApp);
  }

  // Pasang event listener ke seluruh area kartu Free Trial (kirim pesan WA)
  if (freeTrialCard) {
    freeTrialCard.addEventListener('click', (e) => {
      // Pastikan bukan link lain yang diklik
      if (e.target.tagName !== 'A' && e.target.parentElement.tagName !== 'A') {
        openWhatsApp(e);
      }
    });
  }

  // Pasang event listener ke semua tombol dengan class btn-scroll-to-cta (scroll ke bawah)
  if (btnScrolls.length > 0) {
    btnScrolls.forEach(btn => {
      btn.addEventListener('click', scrollToFreeTrial);
    });
  }

  // Pasang event listener ke semua kartu di seksi Fitur/Kurikulum (scroll ke bawah)
  if (featureCards.length > 0) {
    featureCards.forEach(card => {
      card.addEventListener('click', scrollToFreeTrial);
    });
  }

  // Pasang event listener ke semua kartu di seksi Meet Cato (scroll ke bawah)
  if (tutorCards.length > 0) {
    tutorCards.forEach(card => {
      card.addEventListener('click', scrollToFreeTrial);
    });
  }

  // --- 5. LOGIKA INTERAKTIF SIMULATOR BELAJAR CATO (WIDGET GAYA DUOLINGO) ---
  const simOptionBtns = document.querySelectorAll('.sim-option-btn');
  const catoSimText = document.getElementById('cato-sim-text');
  const simCtaContainer = document.getElementById('sim-cta-container');
  const btnSimCta = document.getElementById('btn-sim-cta');

  if (simOptionBtns.length > 0 && catoSimText && simCtaContainer && btnSimCta) {
    const responses = {
      sleeping: "Good try! But look closer, it's jumping joyfully! It is hopping! Let's try again! 🌟",
      hopping: "Excellent! You are Fast, Careful, and Smart! Yes, the cat is hopping! Great job! 🎉 Segera tunjukkan kehebatanmu ke Ayah dan Bunda!",
      running: "Good try! But look closer, it's jumping joyfully! It is hopping! Let's try again! 🌟"
    };

    simOptionBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const responseKey = btn.getAttribute('data-response');
        
        // Update dialog chat Cato dengan respon ceria
        if (responses[responseKey]) {
          // Transisi text halus
          catoSimText.style.opacity = 0;
          setTimeout(() => {
            catoSimText.textContent = responses[responseKey];
            catoSimText.style.opacity = 1;
          }, 150);
        }

        // Atur status kelas tombol (Terpilih vs Buram)
        simOptionBtns.forEach(b => {
          b.classList.remove('selected');
          b.classList.add('dimmed');
        });
        btn.classList.remove('dimmed');
        btn.classList.add('selected');

        // Munculkan tombol emas CTA hanya untuk respon sukses (jawaban benar: hopping)
        if (responseKey === 'hopping') {
          if (simCtaContainer.classList.contains('sim-cta-hidden')) {
            simCtaContainer.classList.remove('sim-cta-hidden');
            simCtaContainer.classList.add('sim-cta-visible');
          }
        } else {
          // Sembunyikan jika memilih jawaban salah
          simCtaContainer.classList.add('sim-cta-hidden');
          simCtaContainer.classList.remove('sim-cta-visible');
        }
      });
    });

    // Hubungkan tombol CTA simulator ke smooth scroll menuju tombol Uji Coba paling bawah
    btnSimCta.addEventListener('click', scrollToFreeTrial);
  }
});
