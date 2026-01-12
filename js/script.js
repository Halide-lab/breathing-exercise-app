document.addEventListener("DOMContentLoaded", () => {
  const landing = document.getElementById("landing");
  const options = document.getElementById("options");
  const about = document.getElementById("about");
  const exercise = document.getElementById("exercise");
  let selectedSeconds = 3;
  let activeTimers = [];

  const playBtn = document.getElementById("playBtn");
  const homeBtn = document.getElementById("homeBtn");
  const aboutBtn = document.querySelector(".about-btn");
  const retryBtn = document.getElementById("retryBtn");
  const congrats = document.getElementById("congrats");
  const continueBtn = document.getElementById("continueBtn");
  const startBtn = document.getElementById("startBtn");

  const phaseText = document.getElementById("phaseText");
  const water = document.getElementById("water");

  // başlangıç
  homeBtn.classList.add("hidden");

  // landing -> options
  playBtn.addEventListener("click", () => {
    landing.classList.remove("active");
    options.classList.add("active");
    about.classList.remove("active");
    exercise.classList.remove("active");
    homeBtn.classList.remove("hidden");
  });

  // home -> landing
  homeBtn.addEventListener("click", () => {
    landing.classList.add("active");
    options.classList.remove("active");
    about.classList.remove("active");
    exercise.classList.remove("active");
    homeBtn.classList.add("hidden");
  });

  // landing -> about
  aboutBtn.addEventListener("click", () => {
    landing.classList.remove("active");
    options.classList.remove("active");
    exercise.classList.remove("active");
    about.classList.add("active");
    homeBtn.classList.add("hidden");

    const flow = document.querySelector(".about-flow");
    if (!flow) return;

    flow.classList.remove("animate");
    void flow.offsetWidth;
    flow.classList.add("animate");

    flow.addEventListener("animationend", () => {
      about.classList.remove("active");
      landing.classList.add("active");
    }, { once: true });
  });

  // options -> exercise + süre seçimi
document.querySelectorAll(".option-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    selectedSeconds = Number(btn.dataset.seconds);

    options.classList.remove("active");
    exercise.classList.add("active");
    homeBtn.classList.add("hidden");

    // ❌ animasyon BAŞLAMAZ
    water.style.height = "0%";
  });
});


        if (continueBtn) {
        continueBtn.addEventListener("click", () => {
            congrats.classList.remove("active");
            options.classList.add("active");
            homeBtn.classList.remove("hidden");
        });
    }

    retryBtn.addEventListener("click", () => {
        // animasyonu resetle
        water.style.transition = "none";
        water.style.height = "0%";

        // ekran geçişi
        exercise.classList.remove("active");
        options.classList.add("active");

        // home icon geri gelsin
        homeBtn.classList.remove("hidden");

        // yazıyı sıfırla
        phaseText.textContent = "Inhale";
        });


        function breathe(seconds) {
        water.style.height = "0%";
        water.style.transition = "none";

        setTimeout(() => {
            water.style.transition = `height ${seconds}s linear`;

            phaseText.textContent = "Inhale";
            water.style.height = "100%";

            setTimeout(() => {
            phaseText.textContent = "Hold";
            }, seconds * 1000);

            setTimeout(() => {
            phaseText.textContent = "Exhale";
            water.style.height = "0%";
            }, seconds * 2000);
        }, 50);
    }

    startBtn.addEventListener("click", () => {
  startBtn.style.display = "none";

  // 🔥 ANİMASYON BURADA BAŞLAR
  breathe(selectedSeconds);

  // 🔥 CONGRATS TIMER BURADA
  activeTimers.push(setTimeout(() => {
    exercise.classList.remove("active");
    congrats.classList.add("active");
    homeBtn.classList.add("hidden");
  }, selectedSeconds * 3000));
});
});
