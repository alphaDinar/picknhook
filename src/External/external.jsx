export const icon = (prop) => {
  return <i className="material-symbols-outlined">{prop}</i>
}

export const iconFont = (prop, prop2) => {
  return <a href={prop2} className={prop} target="blank_"></a>
}

export const getTimeSince = (date) => {
  const currentDate = new Date();
  const timeElapsed = currentDate - new Date(date);
  const seconds = Math.floor(timeElapsed / 1000);
  if (seconds < 60) {
    return `${seconds} second${seconds !== 1 ? 's' : ''} ago`;
  }
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) {
    return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
  }
  const hours = Math.floor(minutes / 60);
  if (hours < 24) {
    return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
  }
  const days = Math.floor(hours / 24);
  if (days < 7) {
    return `${days} day${days !== 1 ? 's' : ''} ago`;
  }
  const weeks = Math.floor(days / 7);
  if (weeks < 4) {
    return `${weeks} week${weeks !== 1 ? 's' : ''} ago`;
  }
  // Get the current date's year and month
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  // Get the input date's year and month
  const inputYear = date.getFullYear();
  const inputMonth = date.getMonth();
  const yearDifference = currentYear - inputYear;
  const monthDifference = currentMonth - inputMonth;
  if (yearDifference === 0) {
    if (monthDifference === 1) {
      return '1 month ago';
    } else {
      return `${monthDifference} months ago`;
    }
  } else if (yearDifference === 1 && monthDifference < 0) {
    return '11 months ago';
  } else {
    if (yearDifference === 1) {
      return '1 year ago';
    } else {
      return `${yearDifference} years ago`;
    }
  }
}

export const sortHostByTime = (a,b)=>{
  const timeA = a.createdOn
  const timeB = b.createdOn
  return timeB - timeA
}

export const sortPostsByTime = (a, b) => {
  const timeA = a.timestamp
  const timeB = b.timestamp
  return timeB - timeA
}


export const countryList = () => {
  return [
    "Albania", "Algeria", "Andorra", "Angola", "Argentina", "Austria", "Belarus",
    "Belgium", "Benin", "Bolivia", "Botswana", "Brazil", "Bulgaria", "Burkina Faso",
    "Burundi", "Cabo Verde", "Cameroon", "Central African Republic", "Chad", "Chile",
    "Colombia", "Comoros", "Congo", "Congo", "Cote d'Ivoire", "Croatia", "Cyprus",
    "Czech Republic", "Denmark", "Djibouti", "Ecuador", "Egypt", "Equatorial Guinea",
    "Eritrea", "Eswatini", "Ethiopia", "Finland", "France", "Gabon", "Gambia", "Germany",
    "Ghana", "Greece", "Guinea", "Guinea-Bissau", "Guyana", "Hungary", "Iceland", "Ireland",
    "Italy", "Kenya", "Kosovo", "Latvia", "Lesotho", "Liberia", "Libya", "Liechtenstein",
    "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Mali", "Malta", "Mauritania",
    "Mauritius", "Moldova", "Monaco", "Montenegro", "Morocco", "Mozambique", "Namibia",
    "Netherlands", "Niger", "Nigeria", "North Macedonia", "Norway", "Paraguay", "Peru",
    "Poland", "Portugal", "Romania", "Russia", "Rwanda", "San Marino", "Sao Tome and Principe",
    "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Slovakia", "Slovenia", "Somalia",
    "South Africa", "South Sudan", "Spain", "Suriname", "Sweden", "Switzerland", "Tanzania",
    "Togo", "Tunisia", "Uganda", "Ukraine", "United Kingdom", "Uruguay", "Vatican City",
    "Venezuela", "Zambia", "Zimbabwe"
  ]
} 


