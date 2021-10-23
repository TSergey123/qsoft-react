import React from 'react'


export const partnersData = [
  { partnerTitle: 'Наш партнер', partnerLogo: '1logo_desktop' },
  { partnerTitle: 'Наш партнер', partnerLogo: '2logo_desktop' },
  { partnerTitle: 'Наш партнер', partnerLogo: '3logo_desktop' },
  { partnerTitle: 'Наш партнер', partnerLogo: '4logo_desktop' },
  { partnerTitle: 'Наш партнер', partnerLogo: '5logo_desktop' },
  { partnerTitle: 'Наш партнер', partnerLogo: '6logo_desktop' },
  { partnerTitle: 'Наш партнер', partnerLogo: '7logo_desktop' },
];

const partnerItems = partnersData.map((partnerData) =>
  <div class="partner__item">
    <img class="partner__logo" src={`img/partners-logo/${partnerData.partnerLogo}.png`} alt={partnerData.partnerTitle} />
  </div>
);

const Partner = ({
}) => {

  return (
    <>
      {partnerItems}
    </>
  )
}

export default Partner;