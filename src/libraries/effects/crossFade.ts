const crossFade = (i: any, o: any) => {
  return new Promise((resolve: any) => {
    i.y = -100;
    i.patch({
      alpha: 0, visible: true,
      smooth: {
        alpha: [1, { duration: 1 }],
        y: [0, { duration: 1 }]
      }
    });
    if (o) {
      o.patch({
        smooth: {
          alpha: [0, { duration: 1 }]
        }
      });
    }

    // resolve on y finish
    i.transition('alpha').on('finish', () => {
      resolve();
    });
  });
};