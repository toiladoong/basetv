export const up = (i: any, o: any) => {
  return new Promise((resolve: any) => {
    i.patch({
      y: 1080, visible: true,
      smooth: {
        y: [0, { duration: 0.6, delay: 0.1 }]
      }
    });

    // out is optional
    if (o) {
      o.patch({
        y: 0,
        smooth: {
          y: [-1080, { duration: 0.6, delay: 0.1 }]
        }
      });
    }

    // resolve on y finish
    i.transition('y').on('finish', () => {
      resolve();
    });
  });
}

export const left = (i: any, o: any) => {
  return new Promise((resolve: any) => {
    i.patch({
      x: 1920, visible: true,
      smooth: {
        x: [0, { duration: 1, delay: 1 }]
      }
    });
    // out is optional
    if (o) {
      o.patch({
        y: 0,
        smooth: {
          x: [-1920, { duration: 1, delay: 1 }]
        }
      });
    }

    // resolve on y finish
    i.transition('x').on('ready', () => {
      resolve();
    });
  });
}