const subTypes = {
  free: "Only free courses",
  basic: "Only for 1 month",
  expert: "All courses, 1 year",
  expertduo: "You and someone else, 1 year",
};

function getSubType(suscription) {
  if (subTypes[suscription]) {
    console.log(subTypes[suscription]);
    return;
  }
  console.warn("No subscription");
}

getSubType("free");
getSubType("expertduo");
