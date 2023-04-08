export function callInfo() {
  const callInfoArea1 = document.querySelector('.characteristic__item_right_img_1');
  const infoText1 = document.querySelector('.characteristic__item_right_helpText_1');

  callInfoArea1.addEventListener('mouseover', () => {
    infoText1.classList.add('active');
  });

  callInfoArea1.addEventListener('mouseout', () => {
    infoText1.classList.remove('active');
  });

  callInfoArea1.addEventListener('click', () => {
    infoText1.classList.toggle('active');
  });

  // callInfoArea1.addEventListener('click', () => {
  //   infoText1.classList.toggle('noHover');
  //   if (infoText1.classList.contains('active')) {
  //     infoText1.classList.toggle('active');
  //     infoText1.classList.toggle('hidden');
  //   }
  // });


  const callInfoArea2 = document.querySelector('.characteristic__item_right_img_2');
  const infoText2 = document.querySelector('.characteristic__item_right_helpText_2');

  callInfoArea2.addEventListener('mouseover', () => {
    infoText2.classList.add('active');
  });

  callInfoArea2.addEventListener('mouseout', () => {
    infoText2.classList.remove('active');
  });

  callInfoArea2.addEventListener('click', () => {
    infoText2.classList.toggle('active');
  });

  // callInfoArea2.addEventListener('click', () => {
  //   infoText2.classList.toggle('noHover');
  //   if (infoText2.classList.contains('active')) {
  //     infoText2.classList.toggle('active');
  //     infoText2.classList.toggle('hidden');
  //   }
  // });
}