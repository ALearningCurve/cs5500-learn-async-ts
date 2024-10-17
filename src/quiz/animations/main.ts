const aliceTumbling1: Keyframe[] = [
  { transform: 'rotate(0) scale(1)' },
  { transform: 'rotate(360deg) scale(0)' }
];

const aliceTiming1: KeyframeEffectOptions = {
  duration: 2000,
  iterations: 1,
  fill: 'forwards'
};

const alice10 = document.querySelector<HTMLElement>("#alice1");
const alice20 = document.querySelector<HTMLElement>("#alice2");
const alice30 = document.querySelector<HTMLElement>("#alice3");

async function runAnimation(element: HTMLElement | null, id: string) {
  if (element === null) {
    console.warn(`${id} not found`);
  } else {
    await element
      .animate(aliceTumbling1, aliceTiming1)
      .finished;
  }
}

async function sequentiallyAnimate() {
  try {
    await runAnimation(alice10, "#alice1");
    await runAnimation(alice20, "#alice2");
    await runAnimation(alice30, "#alice3");
  } catch (err) {
    if (err instanceof Error) {
      console.log(`Error when animating: ${err.message}`);
    } else {
      console.log(`Error when animating: An unknown error occurred`);
    }
  }
}

sequentiallyAnimate();
