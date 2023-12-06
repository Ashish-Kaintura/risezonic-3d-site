function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotive();

// canvas start

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
     AIIMAGE/male0001.png
     AIIMAGE/male0002.png
     AIIMAGE/male0003.png
     AIIMAGE/male0004.png
     AIIMAGE/male0005.png
     AIIMAGE/male0006.png
     AIIMAGE/male0007.png
     AIIMAGE/male0008.png
     AIIMAGE/male0009.png
     AIIMAGE/male0010.png
     AIIMAGE/male0011.png
     AIIMAGE/male0012.png
     AIIMAGE/male0013.png
     AIIMAGE/male0014.png
     AIIMAGE/male0015.png
     AIIMAGE/male0016.png
     AIIMAGE/male0017.png
     AIIMAGE/male0018.png
     AIIMAGE/male0019.png
     AIIMAGE/male0020.png
     AIIMAGE/male0021.png
     AIIMAGE/male0022.png
     AIIMAGE/male0023.png
     AIIMAGE/male0024.png
     AIIMAGE/male0025.png
     AIIMAGE/male0026.png
     AIIMAGE/male0027.png
     AIIMAGE/male0028.png
     AIIMAGE/male0029.png
     AIIMAGE/male0030.png
     AIIMAGE/male0031.png
     AIIMAGE/male0032.png
     AIIMAGE/male0033.png
     AIIMAGE/male0034.png
     AIIMAGE/male0035.png
     AIIMAGE/male0036.png
     AIIMAGE/male0037.png
     AIIMAGE/male0038.png
     AIIMAGE/male0039.png
     AIIMAGE/male0040.png
     AIIMAGE/male0041.png
     AIIMAGE/male0042.png
     AIIMAGE/male0043.png
     AIIMAGE/male0044.png
     AIIMAGE/male0045.png
     AIIMAGE/male0046.png
     AIIMAGE/male0047.png
     AIIMAGE/male0048.png
     AIIMAGE/male0049.png
     AIIMAGE/male0050.png
     AIIMAGE/male0051.png
     AIIMAGE/male0052.png
     AIIMAGE/male0053.png
     AIIMAGE/male0054.png
     AIIMAGE/male0055.png
     AIIMAGE/male0056.png
     AIIMAGE/male0057.png
     AIIMAGE/male0058.png
     AIIMAGE/male0059.png
     AIIMAGE/male0060.png
     AIIMAGE/male0061.png
     AIIMAGE/male0062.png
     AIIMAGE/male0063.png
     AIIMAGE/male0064.png
     AIIMAGE/male0065.png
     AIIMAGE/male0066.png
     AIIMAGE/male0067.png
     AIIMAGE/male0068.png
     AIIMAGE/male0069.png
     AIIMAGE/male0070.png
     AIIMAGE/male0071.png
     AIIMAGE/male0072.png
     AIIMAGE/male0073.png
     AIIMAGE/male0074.png
     AIIMAGE/male0075.png
     AIIMAGE/male0076.png
     AIIMAGE/male0077.png
     AIIMAGE/male0078.png
     AIIMAGE/male0079.png
     AIIMAGE/male0080.png
     AIIMAGE/male0081.png
     AIIMAGE/male0082.png
     AIIMAGE/male0083.png
     AIIMAGE/male0084.png
     AIIMAGE/male0085.png
     AIIMAGE/male0086.png
     AIIMAGE/male0087.png
     AIIMAGE/male0088.png
     AIIMAGE/male0089.png
     AIIMAGE/male0090.png
     AIIMAGE/male0091.png
     AIIMAGE/male0092.png
     AIIMAGE/male0093.png
     AIIMAGE/male0094.png
     AIIMAGE/male0095.png
     AIIMAGE/male0096.png
     AIIMAGE/male0097.png
     AIIMAGE/male0098.png
     AIIMAGE/male0099.png
     AIIMAGE/male0100.png
     AIIMAGE/male0101.png
     AIIMAGE/male0102.png
     AIIMAGE/male0103.png
     AIIMAGE/male0104.png
     AIIMAGE/male0105.png
     AIIMAGE/male0106.png
     AIIMAGE/male0107.png
     AIIMAGE/male0108.png
     AIIMAGE/male0109.png
     AIIMAGE/male0110.png
     AIIMAGE/male0111.png
     AIIMAGE/male0112.png
     AIIMAGE/male0113.png
     AIIMAGE/male0114.png
     AIIMAGE/male0115.png
     AIIMAGE/male0116.png
     AIIMAGE/male0117.png
     AIIMAGE/male0118.png
     AIIMAGE/male0119.png
     AIIMAGE/male0120.png
     AIIMAGE/male0121.png
     AIIMAGE/male0122.png
     AIIMAGE/male0123.png
     AIIMAGE/male0124.png
     AIIMAGE/male0125.png
     AIIMAGE/male0126.png
     AIIMAGE/male0127.png
     AIIMAGE/male0128.png
     AIIMAGE/male0129.png
     AIIMAGE/male0130.png
     AIIMAGE/male0131.png
     AIIMAGE/male0132.png
     AIIMAGE/male0133.png
     AIIMAGE/male0134.png
     AIIMAGE/male0135.png
     AIIMAGE/male0136.png
     AIIMAGE/male0137.png
     AIIMAGE/male0138.png
     AIIMAGE/male0139.png
     AIIMAGE/male0140.png
     AIIMAGE/male0141.png
     AIIMAGE/male0142.png
     AIIMAGE/male0143.png
     AIIMAGE/male0144.png
     AIIMAGE/male0145.png
     AIIMAGE/male0146.png
     AIIMAGE/male0147.png
     AIIMAGE/male0148.png
     AIIMAGE/male0149.png
     AIIMAGE/male0150.png
     AIIMAGE/male0151.png
     AIIMAGE/male0152.png
     AIIMAGE/male0153.png
     AIIMAGE/male0154.png
     AIIMAGE/male0155.png
     AIIMAGE/male0156.png
     AIIMAGE/male0157.png
     AIIMAGE/male0158.png
     AIIMAGE/male0159.png
     AIIMAGE/male0160.png
     AIIMAGE/male0161.png
     AIIMAGE/male0162.png
     AIIMAGE/male0163.png
     AIIMAGE/male0164.png
     AIIMAGE/male0165.png
     AIIMAGE/male0166.png
     AIIMAGE/male0167.png
     AIIMAGE/male0168.png
     AIIMAGE/male0169.png
     AIIMAGE/male0170.png
     AIIMAGE/male0171.png
     AIIMAGE/male0172.png
     AIIMAGE/male0173.png
     AIIMAGE/male0174.png
     AIIMAGE/male0175.png
     AIIMAGE/male0176.png
     AIIMAGE/male0177.png
     AIIMAGE/male0178.png
     AIIMAGE/male0179.png
     AIIMAGE/male0180.png
     AIIMAGE/male0181.png
     AIIMAGE/male0182.png
     AIIMAGE/male0183.png
     AIIMAGE/male0184.png
     AIIMAGE/male0185.png
     AIIMAGE/male0186.png
     AIIMAGE/male0187.png
     AIIMAGE/male0188.png
     AIIMAGE/male0189.png
     AIIMAGE/male0190.png
     AIIMAGE/male0191.png
     AIIMAGE/male0192.png
     AIIMAGE/male0193.png
     AIIMAGE/male0194.png
     AIIMAGE/male0195.png
     AIIMAGE/male0196.png
     AIIMAGE/male0197.png
     AIIMAGE/male0198.png
     AIIMAGE/male0199.png
     AIIMAGE/male0200.png
     AIIMAGE/male0201.png
     AIIMAGE/male0202.png
     AIIMAGE/male0203.png
     AIIMAGE/male0204.png
     AIIMAGE/male0205.png
     AIIMAGE/male0206.png
     AIIMAGE/male0207.png
     AIIMAGE/male0208.png
     AIIMAGE/male0209.png
     AIIMAGE/male0210.png
     AIIMAGE/male0211.png
     AIIMAGE/male0212.png
     AIIMAGE/male0213.png
     AIIMAGE/male0214.png
     AIIMAGE/male0215.png
     AIIMAGE/male0216.png
     AIIMAGE/male0217.png
     AIIMAGE/male0218.png
     AIIMAGE/male0219.png
     AIIMAGE/male0220.png
     AIIMAGE/male0221.png
     AIIMAGE/male0222.png
     AIIMAGE/male0223.png
     AIIMAGE/male0224.png
     AIIMAGE/male0225.png
     AIIMAGE/male0226.png
     AIIMAGE/male0227.png
     AIIMAGE/male0228.png
     AIIMAGE/male0229.png
     AIIMAGE/male0230.png
     AIIMAGE/male0231.png
     AIIMAGE/male0232.png
     AIIMAGE/male0233.png
     AIIMAGE/male0234.png
     AIIMAGE/male0235.png
     AIIMAGE/male0236.png
     AIIMAGE/male0237.png
     AIIMAGE/male0238.png
     AIIMAGE/male0239.png
     AIIMAGE/male0240.png
     AIIMAGE/male0241.png
     AIIMAGE/male0242.png
     AIIMAGE/male0243.png
     AIIMAGE/male0244.png
     AIIMAGE/male0245.png
     AIIMAGE/male0246.png
     AIIMAGE/male0247.png
     AIIMAGE/male0248.png
     AIIMAGE/male0249.png
     AIIMAGE/male0250.png
     AIIMAGE/male0251.png
     AIIMAGE/male0252.png
     AIIMAGE/male0253.png
     AIIMAGE/male0254.png
     AIIMAGE/male0255.png
     AIIMAGE/male0256.png
     AIIMAGE/male0257.png
     AIIMAGE/male0258.png
     AIIMAGE/male0259.png
     AIIMAGE/male0260.png
     AIIMAGE/male0261.png
     AIIMAGE/male0262.png
     AIIMAGE/male0263.png
     AIIMAGE/male0264.png
     AIIMAGE/male0265.png
     AIIMAGE/male0266.png
     AIIMAGE/male0267.png
     AIIMAGE/male0268.png
     AIIMAGE/male0269.png
     AIIMAGE/male0270.png
     AIIMAGE/male0271.png
     AIIMAGE/male0272.png
     AIIMAGE/male0273.png
     AIIMAGE/male0274.png
     AIIMAGE/male0275.png
     AIIMAGE/male0276.png
     AIIMAGE/male0277.png
     AIIMAGE/male0278.png
     AIIMAGE/male0279.png
     AIIMAGE/male0280.png
     AIIMAGE/male0281.png
     AIIMAGE/male0282.png
     AIIMAGE/male0283.png
     AIIMAGE/male0284.png
     AIIMAGE/male0285.png
     AIIMAGE/male0286.png
     AIIMAGE/male0287.png
     AIIMAGE/male0288.png
     AIIMAGE/male0289.png
     AIIMAGE/male0290.png
     AIIMAGE/male0291.png
     AIIMAGE/male0292.png
     AIIMAGE/male0293.png
     AIIMAGE/male0294.png
     AIIMAGE/male0295.png
     AIIMAGE/male0296.png
     AIIMAGE/male0297.png
     AIIMAGE/male0298.png
     AIIMAGE/male0299.png
     AIIMAGE/male0300.png
 `;
  return data.split("\n")[index];
}

const frameCount = 300;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page>canvas`,
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width  / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
// ScrollTrigger.create({
//   trigger: "#page>canvas",
//   pin: true,
//   // markers:true,
//   scroller: `#main`,
//   start: `top top`,
//   end: `400% top`,
// });

gsap.to("#page>canvas", {
  scrollTrigger: {
    trigger: "#page>canvas",
    pin: true,
    // markers:true,
    scroller: `#main`,
    start: `top top`,
    end: `399% top`,
  },
});
gsap.to("#page1", {
  scrollTrigger: {
    trigger: `#page1`,
    start: `top top`,
    end: `bottom top`,
    pin: true,
    scroller: `#main`,
  },
});
gsap.to("#page2", {
  scrollTrigger: {
    trigger: `#page2`,
    start: `top top`,
    end: `bottom top`,
    pin: true,
    scroller: `#main`,
  },
});
// gsap.to("#page3", {
//   scrollTrigger: {
//     trigger: `#page3`,
//     start: `top top`,
//     end: `bottom top`,
//     pin: true,
//     scroller: `#main`,
//   },
// });
// gsap.to("#page4", {
//   scrollTrigger: {
//     trigger: `#page4`,
//     start: `top top`,
//     end: `bottom top`,
//     pin: true,
//     scroller: `#main`,
//   },
// });

gsap.to("#wheel", {
  x: 800,
  duration: 2,
  delay: 0.5,
  repeat: -1,
  // backgroundColor: "blue",
  rotate: 360,
  yoyo: true,
});