---
layout: post
title: Nora's Blog :) 
description: AP CSA study zone 
permalink: /
---

<style>
  .snowflake-image-toggle {
    position: fixed;
    top: 66px;
    right: 14px;
    z-index: 41;
    width: 46px;
    height: 46px;
    border: 1px solid rgba(255, 255, 255, 0.35);
    border-radius: 999px;
    padding: 0;
    background: rgba(17, 24, 39, 0.7);
    backdrop-filter: blur(6px);
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .snowflake-image-toggle img {
    width: 24px;
    height: 24px;
    object-fit: contain;
  }

  .snowflake-toggle {
    position: fixed;
    top: 122px;
    right: 14px;
    z-index: 40;
    border: 1px solid rgba(255, 255, 255, 0.35);
    border-radius: 999px;
    padding: 8px 12px;
    background: rgba(17, 24, 39, 0.7);
    color: #ffffff;
    font-size: 0.9rem;
    font-weight: 600;
    backdrop-filter: blur(6px);
    cursor: pointer;
  }

  .homepage-snowflakes {
    position: fixed;
    inset: 0;
    pointer-events: none;
    overflow: hidden;
    z-index: 15;
    transition: opacity 0.35s ease;
  }

  .homepage-snowflakes.is-hidden {
    opacity: 0;
  }

  .homepage-snowflakes.is-paused .homepage-snowflake,
  .homepage-snowflakes.is-paused .homepage-snowflake::before {
    animation-play-state: paused;
  }

  .homepage-snowflake {
    position: absolute;
    top: -64px;
    width: var(--flake-size, 24px);
    height: var(--flake-size, 24px);
    opacity: 0.9;
    animation-name: snowfall;
    animation-timing-function: linear;
    animation-iteration-count: 1;
    will-change: transform, top;
  }

  .homepage-snowflake::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background-image: var(--flake-image, url('{{ "/images/snowflake.png" | relative_url }}'));
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    animation: snowspin var(--spin-duration, 3.2s) linear infinite;
  }

  @keyframes snowfall {
    from {
      transform: translateX(0);
      top: -64px;
    }
    to {
      transform: translateX(var(--drift, 0px));
      top: 110vh;
    }
  }

  @keyframes snowspin {
    from { rotate: 0deg; }
    to { rotate: 360deg; }
  }
</style>

<button id="snowflake-image-toggle" class="snowflake-image-toggle" type="button" aria-label="Change falling image" title="Change falling image">
  <img id="snowflake-image-preview" src="{{ '/images/flower.png' | relative_url }}" alt="flower" loading="lazy">
</button>
<button id="snowflake-toggle" class="snowflake-toggle" type="button" aria-pressed="false">Hide</button>
<div id="homepage-snowflakes" class="homepage-snowflakes" aria-hidden="true"></div>

<script>
  (function () {
    const container = document.getElementById('homepage-snowflakes');
    const toggleBtn = document.getElementById('snowflake-toggle');
    const imageToggleBtn = document.getElementById('snowflake-image-toggle');
    const imagePreview = document.getElementById('snowflake-image-preview');
    if (!container) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      container.classList.add('is-hidden');
      if (toggleBtn) {
        toggleBtn.textContent = 'Show';
        toggleBtn.setAttribute('aria-pressed', 'true');
      }
      return;
    }

    const maxFlakes = 26;
    let snowflakesHidden = false;
    const fallingImages = [
      { src: '{{ "/images/flower.png" | relative_url }}', label: 'flower' },
      { src: '{{ "/images/leaf.png" | relative_url }}', label: 'leaf' },
      { src: '{{ "/images/snowflake.png" | relative_url }}', label: 'snowflake' },
      { src: '{{ "/images/sun.png" | relative_url }}', label: 'sun' }
    ];
    let currentImageIndex = 0;

    function applyCurrentImage() {
      const currentImage = fallingImages[currentImageIndex];
      container.style.setProperty('--flake-image', `url("${currentImage.src}")`);
      if (imagePreview) {
        imagePreview.src = currentImage.src;
        imagePreview.alt = currentImage.label;
      }
    }

    function updateToggleText() {
      if (!toggleBtn) return;
      toggleBtn.textContent = snowflakesHidden ? 'Show' : 'Hide';
      toggleBtn.setAttribute('aria-pressed', String(snowflakesHidden));
    }

    function spawnFlake() {
      if (snowflakesHidden) return;
      if (!container || container.childElementCount >= maxFlakes) return;

      const flake = document.createElement('span');
      flake.className = 'homepage-snowflake';

      const size = 14 + Math.random() * 24;
      const left = Math.random() * 100;
      const drift = -55 + Math.random() * 110;
      const fallDuration = 6 + Math.random() * 8;
      const spinDuration = 2.2 + Math.random() * 3.8;

      flake.style.left = `${left}vw`;
      flake.style.setProperty('--flake-size', `${size}px`);
      flake.style.setProperty('--drift', `${drift}px`);
      flake.style.setProperty('--spin-duration', `${spinDuration}s`);
      flake.style.animationDuration = `${fallDuration}s`;

      flake.addEventListener('animationend', function (event) {
        if (event.animationName === 'snowfall') {
          flake.remove();
        }
      });

      container.appendChild(flake);
    }

    for (let i = 0; i < 10; i += 1) {
      setTimeout(spawnFlake, i * 260);
    }

    setInterval(spawnFlake, 380);
    applyCurrentImage();

    if (imageToggleBtn) {
      imageToggleBtn.addEventListener('click', function () {
        currentImageIndex = (currentImageIndex + 1) % fallingImages.length;
        applyCurrentImage();
      });
    }

    if (toggleBtn) {
      toggleBtn.addEventListener('click', function () {
        snowflakesHidden = !snowflakesHidden;
        container.classList.toggle('is-hidden', snowflakesHidden);
        container.classList.toggle('is-paused', snowflakesHidden);
        updateToggleText();
      });
      updateToggleText();
    }
  })();
</script>

# Nora's Blog :]

<a href="{{ '/capstone-checkpoint' | relative_url }}" style="display:block;width:fit-content;margin:16px auto 18px;padding:12px 30px;border-radius:999px;background:rgba(17,24,39,0.85);color:#fff;text-decoration:none;font-weight:700;font-size:1.05rem;letter-spacing:0.2px;box-shadow:0 6px 14px rgba(15,23,42,0.2);border:1px solid rgba(255,255,255,0.2);">4/1 capstone review</a>

| Date | Frq Lesson homework!| AP CSA unit|☆difficulty☆| reflection |
|:-----|:---------|:------------|:---------|:--------|
| 2/7 | [2016 #3](https://github.com/Frogpants/gamers/issues/40) | Data Collections | 3/5 ☆ | I struggled a bit with visualizing the 2D array and making sure I wasn’t going out of bounds, especially on the edges. Writing the boolean logic for checking neighbors took some trial and error. In Part B, switching to OOP was confusing at first, especially understanding how the class and toString() worked together. |
| 2/7 | [2024 #1](https://github.com/Frogpants/gamers/issues/41) | Selection and Iteration | 2/5 ☆ | I struggled a bit with keeping track of how the variable was changing over time in the simulation. Making sure I updated the value in the right order before checking conditions was a little confusing. But I helped myself by tracking my work on a seprete peice of paper, and by having reviewed these questions before since Ive gotten simular ones on the practice MCQs |
| 2/14 | [2019 #4](https://github.com/Frogpants/gamers/issues/45) | 2D Arrays and Grids | 2/5 ☆ | Same as the lesson above, I just struggled keeping track of how the nested loops were iterating, specifically when I was focusing on the colums not rows. It was a little confusing making sure the conditional logic was evaluated correctly before running it (practice for the AP exam where there is no code runner) but I figured it out quickly if I went slow and focused.|
| 3/7 | [2022 #3](https://github.com/NoraTheTurtle/NoraCSA/issues/13) | Data Collections | 3/5 ☆ | I had a little trouble looping through the array of objects and making sure I was calling the right methods on each one. The string filtering and formatting part took some trial and error to get exactly right, which is something I want to review since again, on the AP exam there is sadly no code runner. I also had to be careful with casting to avoid integer division when calculating the average. |
| 3/14 | 2017 #1 (My lesson!) | Selection and Iteration | 2/5 ☆ | Creating and teaching this lesson/hw helped me review/learn more about how to turn a number into a list of digits and then analyze that list with looping and conditionals. I got more practice with constructors, ArrayList<Integer>, adjacent element comparison, and handling edge cases carefully. Before the AP CSA exam, I would want to review lists, traversing arrays and ArrayLists, loop boundaries, constructors, and common FRQ patterns like checking pairs of elements in sequence. |
| 3/21 | [2024 #3](https://github.com/NoraTheTurtle/NoraCSA/issues/11) | Data Collections | 4/5 ☆ | The string methods like contains, startsWith, and substring were a bit tricky to apply correctly at first. I also had to think carefully about how to build new lists without modifying the original data, so to study for the AP test im going to review this FRQ as practice on these topics im weaker in |
| 3/30 | [2017 #4](https://github.com/NoraTheTurtle/NoraCSA/issues/12) | 2D Arrays and Grids | 3/5 ☆ | Combining nested loops and method calls to build the new 2D array correctly was the hardest part for me. Keeping track of what each index represented and making sure I passed the right values into findPosition was a bit confusing. Handling cases where the value didn’t exist and returning null also took some careful thinking, and a lot of focus.|

{% comment %}

<!-- ================= LIQUID SETUP ================= -->

{% assign sprite_file = site.baseurl | append: page.sprite %}
{% assign hash = site.data.mario_metadata %}
{% assign pixels = 256 %}

<!-- ================= GAME ELEMENTS ================= -->

<p id="mario" class="sprite"></p>
<canvas id="fog"></canvas>

<!-- Mobile Controls -->
<div id="controls">
  <button data-dir="up">▲</button>
  <div class="middle">
    <button data-dir="left">◀</button>
    <button data-dir="down">▼</button>
    <button data-dir="right">▶</button>
  </div>
</div>

<!-- ================= STYLES ================= -->

<style>
body {
  background-color: black;
}

/* Prevent touch behavior only on game elements */
#mario,
#controls,
#controls button {
  touch-action: none;
}


  .sprite {
    height: {{pixels}}px;
    width: {{pixels}}px;
    background-image: url('{{sprite_file}}');
    background-repeat: no-repeat;
    position: absolute;
    z-index: 1001;
  }

  #mario {
    background-position: 0 0;
  }

  #fog {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    pointer-events: none;
    z-index: 999;
  }

  .social-icon {
    filter: invert(1);
  }

  /* ================= MOBILE CONTROLS ================= */

  #controls {
    position: fixed;
    bottom: 20px;
    left: 20px;
    z-index: 2000;
    user-select: none;
  }

  #controls .middle {
    display: flex;
    justify-content: center;
  }

  #controls button {
    width: 60px;
    height: 60px;
    margin: 6px;
    font-size: 24px;
    border-radius: 12px;
    border: none;
    background: rgba(255, 255, 255, 0.15);
    color: white;
    backdrop-filter: blur(6px);
  }

  #controls button:active {
    background: rgba(255, 255, 255, 0.35);
  }
  #controls {
  display: none;
}

@media (max-width: 768px) {
  #controls {
    display: block;
  }
}

</style>

<!-- ================= GAME SCRIPT ================= -->

<script>
  //////////////////// METADATA ////////////////////

  var mario_metadata = {};
  {% for key in hash %}
  mario_metadata["{{key | first}}"] = {
    row: {{key.row}},
    col: {{key.col}},
    frames: {{key.frames}}
  };
  {% endfor %}

  //////////////////// FOG OF WAR ////////////////////

  const fogCanvas = document.getElementById("fog");
  const fogCtx = fogCanvas.getContext("2d");

  function resizeFog() {
    fogCanvas.width = window.innerWidth;
    fogCanvas.height = window.innerHeight;
    fogCtx.fillStyle = "rgba(0,0,0,0.6)";
    fogCtx.fillRect(0, 0, fogCanvas.width, fogCanvas.height);
  }

  window.addEventListener("resize", resizeFog);

  //////////////////// MARIO CLASS ////////////////////

  class Mario {
    constructor(meta) {
      this.meta = meta;
      this.el = document.getElementById("mario");
      this.pixels = {{pixels}};
      this.positionX = 0;
      this.positionY = 200;
      this.frame = 0;
      this.interval = 16;
      this.timer = null;
    }

    animate(state, dx, dy) {
      this.stop();
      const row = state.row * this.pixels;

      this.timer = setInterval(() => {
        const col = (this.frame + state.col) * this.pixels;
        this.el.style.backgroundPosition = `-${col}px -${row}px`;

        this.positionX += dx;
        this.positionY += dy;

        this.el.style.left = `${this.positionX}px`;
        this.el.style.top = `${this.positionY}px`;

        this.frame = (this.frame + 1) % state.frames;

        const rect = this.el.getBoundingClientRect();
        hole.cx = rect.left + rect.width / 2;
        hole.cy = rect.top + rect.height / 2;
      }, this.interval);
    }

    stop() {
      clearInterval(this.timer);
    }

    start(name, dx = 0, dy = 0) {
      this.animate(this.meta[name], dx, dy);
    }
  }

  const mario = new Mario(mario_metadata);

  //////////////////// FOG HOLE ////////////////////

  const hole = {
    cx: 0,
    cy: 0,
    radius: 0,
    targetRadius: 0,
    expanding: false,
    startTime: null,
    duration: 6000
  };

  function drawFogWithHole() {
    fogCtx.globalCompositeOperation = 'source-over';
    fogCtx.fillStyle = 'rgba(0,0,0,0.6)';
    fogCtx.fillRect(0, 0, fogCanvas.width, fogCanvas.height);

    const grad = fogCtx.createRadialGradient(
      hole.cx, hole.cy, hole.radius * 0.2,
      hole.cx, hole.cy, hole.radius
    );

    grad.addColorStop(0, 'rgba(0,0,0,1)');
    grad.addColorStop(1, 'rgba(0,0,0,0)');

    fogCtx.globalCompositeOperation = 'destination-out';
    fogCtx.fillStyle = grad;
    fogCtx.fillRect(0, 0, fogCanvas.width, fogCanvas.height);
    fogCtx.globalCompositeOperation = 'source-over';
  }

  function animateFog(ts) {
    if (!hole.startTime) hole.startTime = ts;
    const p = Math.min(1, (ts - hole.startTime) / hole.duration);
    hole.radius = hole.targetRadius * p;
    drawFogWithHole();
    if (p < 1) requestAnimationFrame(animateFog);
    else fogCanvas.style.display = 'none';
  }

  //////////////////// INPUT (KEYBOARD + TOUCH) ////////////////////

  const keys = { left: false, right: false, up: false, down: false };

  function updateMovement() {
    const dx = (keys.right ? 5 : 0) + (keys.left ? -5 : 0);
    const dy = (keys.down ? 5 : 0) + (keys.up ? -5 : 0);

    if (!dx && !dy) {
      mario.stop();
      return;
    }

    mario.start(keys.left && !keys.right ? "WalkL" : "Walk", dx, dy);
  }

  window.addEventListener("keydown", e => {
    switch (e.key.toLowerCase()) {
      case "a":
      case "arrowleft": keys.left = true; break;
      case "d":
      case "arrowright": keys.right = true; break;
      case "w":
      case "arrowup": keys.up = true; break;
      case "s":
      case "arrowdown": keys.down = true; break;
    }
    updateMovement();
  });

  window.addEventListener("keyup", e => {
    switch (e.key.toLowerCase()) {
      case "a":
      case "arrowleft": keys.left = false; break;
      case "d":
      case "arrowright": keys.right = false; break;
      case "w":
      case "arrowup": keys.up = false; break;
      case "s":
      case "arrowdown": keys.down = false; break;
    }
    updateMovement();
  });

document.querySelectorAll("#controls button").forEach(btn => {
  const dir = btn.dataset.dir;

  btn.addEventListener("pointerdown", e => {
    e.preventDefault();
    keys[dir] = true;
    updateMovement();
  });

  btn.addEventListener("pointerup", () => {
    keys[dir] = false;
    updateMovement();
  });

  btn.addEventListener("pointercancel", () => {
    keys[dir] = false;
    updateMovement();
  });

  btn.addEventListener("pointerleave", () => {
    keys[dir] = false;
    updateMovement();
  });
});


  //////////////////// INIT ////////////////////

  document.addEventListener("DOMContentLoaded", () => {
    resizeFog();
    mario.el.style.transform = `scale(${0.2 * (window.devicePixelRatio || 1)})`;
    mario.start("Rest");

    const rect = mario.el.getBoundingClientRect();
    hole.cx = rect.left + rect.width / 2;
    hole.cy = rect.top + rect.height / 2;
    hole.targetRadius = Math.hypot(fogCanvas.width, fogCanvas.height);
    requestAnimationFrame(animateFog);
  });
</script>

<!-- ================= PAGE CONTENT ================= -->
## About

Empower yourself to solve real-world problems, unlock creativity, and open doors to every field—because coding is the language of innovation.

> Invest in your technical skills through Project-based learning.

<div style="display: flex; align-items: flex-start; justify-content: center; gap: 40px; flex-wrap: wrap;">

  <!-- Logo -->
  <div style="text-align: center;">
    <img src="{{site.baseurl}}/images/logo-framed.png" alt="Logo" style="width: 180px; max-width: 100%;">
  </div>

  <!-- QR Code -->
  <div style="text-align: center;">
    <img src="{{site.baseurl}}/images/course-brag/qr.png" alt="QR Code" style="width: 180px; max-width: 100%;">
  </div>

  <!-- Socials -->
  <div style="min-width: 220px;">
    <ul style="list-style: none; padding: 0; font-size: 1.1em;">
      <li>
        <img class="social-icon" src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/gmail.svg" alt="Gmail" style="width: 20px; vertical-align: middle; margin-right: 8px;">
        <a href="mailto:open.coding.society@gmail.com">open.coding.society@gmail.com</a>
      </li>
      <li>
        <img class="social-icon" src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg" alt="LinkedIn" style="width: 20px; vertical-align: middle; margin-right: 8px;">
        <a href="https://linkedin.com/company/open-coding-society" target="_blank">LinkedIn</a>
      </li>
      <li>
        <img class="social-icon" src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/x.svg" alt="X" style="width: 20px; vertical-align: middle; margin-right: 8px;">
        <a href="https://x.com/Open_Coding" target="_blank">@Open_Coding</a>
      </li>
      <li>
        <img class="social-icon" src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/youtube.svg" alt="YouTube" style="width: 20px; vertical-align: middle; margin-right: 8px;">
        <a href="https://www.youtube.com/@OpenCodingSociety" target="_blank">@OpenCodingSociety</a>
      </li>
    </ul>
  </div>
</div>

### Project-based learning (PBL)

> Conventional learning, such as tests, is used only for diagnostic purposes, allowing students to make corrections before grading. In AP or Articulated courses, tests are also used to establish standing against College Board or community college requirements.

In PBL, student progress and understanding are assessed continuously through project checkpoints, analytics, teacher observation, and verbal discussions, both individually and within teams.

Learning begins with instructor-created materials, including schema foundations, project-starter code, project requirements, and ongoing support.

Student grades are primarily based on project work, time invested, engagement, learned concepts, participation with peers, project analytics, and live reviews between student(s) and instructor.

These are sample indicators of success:

- Performing Agile/Scrum methodologies to promote iterative improvement  
- Coding, frontend, backend, DevOps, version control, and algorithmic thinking  
- Creativity, research, design, data structures, and responsible use of AI  
- Teamwork, communication, collaboration, and peer reviews/grading  
- Technical communication through project presentations and student-led teaching

### Time Breakdown

Instructor is extremely focused on work, routines, and culture established in the classroom.

> If individuals, groups, and teams use class time effectively, homework will generally not be assigned.

- Learning objectives are scheduled over a Sprint
- Sprints last 2–4 weeks
- Classroom work is 4+ hours per week, including weeks with Pro-Grow, Parent Conferences, or other shortened school instruction time.
  - Make the most of every opportunity in class
  - Balance technical work with collaboration and team activities
- Homework can be 1–2 hours per week, primarily to prepare for classroom and team work
  - Review materials discussed in class
  - Mentally prepare for the next day (e.g., update issues or Kanban)
  - Complete additional preparation if you miss class, fall behind, or have upcoming live reviews

### Make-up Policy

Instructor believes absences disrupt work culture and routines.

- Communicate absences in advance with the instructor and team members
- Make a plan to recreate the situation or work missed in class
- Do not disrupt class to make up missed work; be responsible by coordinating with peers or the instructor during office hours

> Students are expected to be in class, similar to workplace expectations.

- Make-up work is challenging for everyone, not just the student who missed class
- Time lost in class is difficult to recover, since individuals work closely with teams, lead lessons, or participate in live reviews
- The instructor reserves the right to adjust instruction during the week according to classroom needs; the schedule is typically adjusted week by week
- Modalities of instruction are flexible to support different learning styles and may go beyond published materials

![ccr]({{site.baseurl}}/images/course-brag/ccr.png)

## Computer Science and Software Engineering (CSSE) 1,2; Grades 9-12

CSSE 1,2 prepares students for the AP Computer Science pathway. This course focuses on teaching the JavaScript programming language, object-oriented programming and inheritance, and developing algorithmic thinking skills.

> Through game development projects, students will engage in engineering skills, learn fundamentals of programming, work with data structures, and foster collaboration skills with their peers. Tech talks conducted by teachers and students introduce concepts, provide guidance on tools, and support ideas to establish development requirements. By performing development and exploration, this course raises students' awareness of the tremendous capabilities of computers and software engineering skills across various fields.

- Prerequisites: None
- Meets UC/CSU G requirements
- CSSE 1,2 receives Articulated College Credit to Mira Costa CC CS 111: "Introduction to Computer Science". Mira Costa CC requires and provides free registration to receive UC college credit.

![csse]({{site.baseurl}}/images/course-brag/csse.png)

## Computer Science Principles 1,2 and Data Structures 1; Grades 10-12

Computer Science Principles is designed as a college-level introduction to computer science. The AP Computer Science Principles curriculum is integrated into this course, covering creative development, data, algorithms and programming, computer systems and networks, and the impact of computing.

> Students work on individual and team projects to build computer systems, write algorithms, analyze for correctness, and engage in discussions about solutions. The course establishes fluency in Python, utilizes prerequisite knowledge in JavaScript, and develops fluency in Linux.

- Prerequisites:
  - Rising 10th graders: Computer Science and Software Engineering (CSSE)
  - Rising 11th–12th graders: GPA above 3.5 and prior experience with JavaScript or other programming languages, including familiarity with version control using GitHub, basic Linux command-line operations, and development in VSCode or a similar IDE.
  - Meets UC/CSU G requirements, also an alternate for 3rd year D requirement

> Data Structures 1 serves as the third trimester for the Computer Science Principles course. It is the capstone for non-computer science majors/minors and prepares other students to complete the PUSD computer science pathway. Data Structures 1 focuses on creating computer projects in small groups, with the instructor serving as a guide rather than a director, and includes AP review and AP project time.

Through Open Coding Society–supported project guidelines and tracking, students engage in authentic educational or technical projects that may include industry- or community-informed problem contexts, as available. Projects emphasize iterative development using principles from **agile-scrum methodologies** and **design-based research**, with multiple refinement cycles leading to a functional prototype suitable for a business client, educational use, or contribution to Open Coding Society initiatives.

The course utilizes **JavaScript and Python languages, the Flask framework and supporting libraries, SQL databases, and object-oriented programming paradigms**. Topics covered include graphical user interfaces, input and output, lists, dictionaries, databases, searching, sorting, and algorithm analysis.

- Prerequisites: AP Computer Science Principles 1,2; Data Structures 1
- Meets UC/CSU G requirements

![csp]({{site.baseurl}}/images/course-brag/csp24.png)

## Computer Science "A" 1,2 and Data Structures 2; Grades 11-12

AP Computer Science A is an in-depth course focusing on programming, algorithms, and data structures. The AP Computer Science 'A' curriculum is integrated into this course, covering the Java programming language and topics such as fundamentals of programming, using objects, writing classes, arrays, array lists, 2D arrays, inheritance, and recursion.

> Students gain understanding through analysis, coding, and individual and team projects. The course establishes fluency in Java, builds on JavaScript skills, and incorporates Linux usage.

- **Prerequisites:** Rising 11th or 12th grader
  - AP Computer Science Principles 1,2 and Data Structures 1
  - Or teacher recommendation, with expectation of understanding JavaScript, Python, OOP, Linux, and Data Structures; foundation in team projects, awareness of agile methodology, design-based research, and GitHub source control
- Meets UC/CSU G requirements, also an alternate for 4th year C requirement

> Data Structures 2 serves as the third trimester for the Computer Science “A” course and is the **course-level capstone** for AP Computer Science A. This course builds directly on previously defined pathway knowledge, **advancing former personal or group ideas** into more robust systems guided by clearer requirements, enhanced algorithmic solutions, and testing for performance, reliability, and reuse. In parallel, the course includes AP preparation for College Board multiple-choice questions (MCQs) and free-response questions (FRQs).

Through Open Coding Society–supported project guidelines and tracking, teams define, refine, and extend prior work to address sponsor-informed or system-defined requirements, as available. Projects may advance a prototype in response to **direct stakeholder feedback**, support production services, or contribute to a deployed system or Open Coding Society initiative. These projects emphasize **technology growth, authentic problems, and meaningful stakeholder engagement**.

The course utilizes **Java with the Spring framework**, with the option to also use **Python with Flask**, or combine both environments as appropriate, to instruct object-oriented programming, system design, and abstraction. Topics covered include searching, sorting, hashing, algorithm analysis, collections, lists, stacks, queues, trees, sets, dictionaries, and graphs.

- Prerequisites: AP Computer Science ‘A’ 1,2  
- Meets UC/CSU G requirements  
- Data Structures 1,2 receives Articulated College Credit to Mira Costa CC for "CS 113: Basic Data Structures and Algorithms". Mira Costa CC requires and provides free registration to receive UC college credit.

![csa]({{site.baseurl}}/images/course-brag/csa24.png)

## Computer Science "H" 1,2 (12th grade)

Computer Science "H" is a **year-long, senior-only, interdisciplinary honors course**, serving as the **Pathway Capstone** aligned with CTE and PLTW capstone expectations.

> This course functions as a high school senior thesis and a **culminating honors experience**, emphasizing professional collaboration, technical documentation, public presentation, and the development of a fully realized solution to a real-world problem.

Students work in teams to identify a real-world problem, conduct research, design and prototype a solution, and present their work to an external audience. The project integrates computer science with related disciplines such as engineering, biomedical science, or other applied fields. Team members may contribute through thesis or project components from their respective disciplines to support interdisciplinary work.

- **Prerequisites for Computer Science students:** Completion of AP Computer Science A 1,2 and Data Structures 1,2 (or teacher recommendation), with demonstrated proficiency in:
  - Programming in Java and/or Python
  - Object-oriented programming and algorithmic problem solving
  - Version control and collaborative workflows using GitHub
  - Linux command-line navigation and scripting
  - Development in VSCode or a similar IDE
  - Participation in team-based projects and iterative development cycles (e.g., agile methodologies, design-based research)

- **Optional prerequisites for Engineering, Biomedical Science, or other applied discipline students:** Defined by their program advisement and aligned with PLTW course expectations.

> Student projects are tracked and guided using Open Coding Society–supported project guidelines, including enrollment, issue tracking, and iterative review cycles, ensuring progress is documented and supported across disciplines.

This capstone emphasizes creating a **student-designed solution to a real-world problem**, integrating computer science with other applied fields while highlighting professional collaboration, technical documentation, and public presentation.
{% endcomment %}
