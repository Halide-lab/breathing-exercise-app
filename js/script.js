document.addEventListener("DOMContentLoaded", () => {
  const landing = document.getElementById("landing");
  const options = document.getElementById("options");
  const about = document.getElementById("about");
  const exercise = document.getElementById("exercise");
  const congrats = document.getElementById("congrats");

  let selectedSeconds = 3;

  const playBtn = document.getElementById("playBtn");
  const homeBtn = document.getElementById("homeBtn");
  const aboutBtn = document.querySelector(".about-btn");
  const retryBtn = document.getElementById("retryBtn");
  const continueBtn = document.getElementById("continueBtn");
  const startBtn = document.getElementById("startBtn");

  const phaseText = document.getElementById("phaseText");
  const water = document.getElementById("water");

  /* ================= TIMER CONTROL ================= */
  let breathTimers = [];
  let congratsTimer = null;

  function addTimer(t) {
    breathTimers.push(t);
  }

  function clearBreathTimers() {
    breathTimers.forEach(t => clearTimeout(t));
    breathTimers = [];

    if (congratsTimer) {
      clearTimeout(congratsTimer);
      congratsTimer = null;
    }
  }

  /* ================= BEGINNING ================= */
  homeBtn.classList.add("hidden");

  /* ================= NAVIGATION ================= */

  playBtn.addEventListener("click", () => {
    landing.classList.remove("active");
    options.classList.add("active");
    about.classList.remove("active");
    exercise.classList.remove("active");
    congrats.classList.remove("active");
    homeBtn.classList.remove("hidden");
  });

  homeBtn.addEventListener("click", () => {
    clearBreathTimers();

    landing.classList.add("active");
    options.classList.remove("active");
    about.classList.remove("active");
    exercise.classList.remove("active");
    congrats.classList.remove("active");
    homeBtn.classList.add("hidden");

    resetExerciseUI();
  });

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

    flow.addEventListener(
      "animationend",
      () => {
        about.classList.remove("active");
        landing.classList.add("active");
      },
      { once: true }
    );
  });

  /* ================= OPTIONS ================= */

  document.querySelectorAll(".option-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      selectedSeconds = Number(btn.dataset.seconds);

      options.classList.remove("active");
      exercise.classList.add("active");
      homeBtn.classList.add("hidden");

      resetExerciseUI();
    });
  });

  /* ================= BREATH LOGIC ================= */

  function resetExerciseUI() {
    clearBreathTimers();
    water.style.transition = "none";
    water.style.height = "0%";
    phaseText.textContent = "Inhale";
    startBtn.style.display = "block";
  }

  function breathe(seconds) {
    clearBreathTimers();

    water.style.transition = "none";
    water.style.height = "0%";

    addTimer(
      setTimeout(() => {
        water.style.transition = `height ${seconds}s linear`;

        phaseText.textContent = "Inhale";
        water.style.height = "100%";

        addTimer(
          setTimeout(() => {
            phaseText.textContent = "Hold";
          }, seconds * 1000)
        );

        addTimer(
          setTimeout(() => {
            phaseText.textContent = "Exhale";
            water.style.height = "0%";
          }, seconds * 2000)
        );
      }, 50)
    );
  }

  /* ================= START ================= */

  startBtn.addEventListener("click", () => {
    startBtn.style.display = "none";

    breathe(selectedSeconds);

    congratsTimer = setTimeout(() => {
      clearBreathTimers();
      exercise.classList.remove("active");
      congrats.classList.add("active");
      homeBtn.classList.add("hidden");
    }, selectedSeconds * 3000);
  });

  /* ================= RETRY ================= */

  retryBtn.addEventListener("click", () => {
    clearBreathTimers();

    exercise.classList.remove("active");
    options.classList.add("active");
    homeBtn.classList.remove("hidden");

    resetExerciseUI();
  });

  /* ================= CONTINUE ================= */

  if (continueBtn) {
    continueBtn.addEventListener("click", () => {
      congrats.classList.remove("active");
      options.classList.add("active");
      homeBtn.classList.remove("hidden");

      resetExerciseUI();
    });
  }
});
