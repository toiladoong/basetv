const fade = (i: any, o: any) => {
  return new Promise((resolve: any) => {
    i.patch({
      alpha: 0, visible: true,
      smooth: {
        alpha: [1, { duration: 1.1, delay: 0.1 }]
      }
    });

    // resolve on y finish
    i.transition('alpha').on('finish', () => {
      if (o) {
        o.visible = false;
      }
      resolve();
    });
  });
};

export default fade