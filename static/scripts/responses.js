let text = "Clam Your Gift 🎁 Here";
let offer = text.link("https://businessara.tech");

function getBotResponse(input) {
  // Simple responses
  if (input == "hello") {
    return "Hello there! How can we help you Today?";
  } else if (input == "Pricing") {
    return `Our pricing for all services varies depending on the \
        specific needs of each client. Our price is structured to reflect our \
        dedication to delivering results that help our clients grow and realise a \
        return on their investment (ROI).<br>Let's arrange a conversation right away to go \
        through your exact requirements and decide which pricing option will work \
        best for your company.` + result;
  } else if (input == "I Love BusinessAra") {
    return "Wow, That's Great News! We would love to give you a very special GIFT " + offer;
  } else if (input == "Offers") {
    return "We are super excited to let you choose a FREE service from Many! \
    Claim your offer " + "here".link("https://businessara.tech")
  } else if (input == "Why BusinessAra") {
    return `There are many reasons to Choose Us<br>
      - First, we have a team of highly skilled and experienced professionals
    who are committed to helping businesses like yours in succeeding.<br>
      - Second, we have a proven track record of delivering results.<br>
      - Third, we are committed to transparency and open communication.<br>
      - Fourth, we understand the importance of budget and we have a range of \
      pricing options and flexible packages to work with different budgets and goals.<br>
      - Lastly, we are dedicated to building long-term relationships with our clients.
    <b><p style="color:green">All above reasons make us a reliable and trustworthy agency for your business.</p>`
  } else if (input == "Our Clients") {
    return `Here are some of the most valuable clients we've previously worked with<br>
      - Nishan Preet Dhillon, Founder and CEO Seaside Home Constructions, Australia<br>
      - Zahir Alam, Founder and CEO Z-Culture, INDIA<br>
      - Parth Maheshwari, Digital Creator, INDIA<br>
      - Tenny, Marketing Manager at Gateway Qatar, Doha Qatar<br>
      - Danyal, Founder Bbcc Brands, INDIA<br>
      - Vijay Singh, Savior Finance Limited, INDIA<br>
      - Harnoor Kaur, Clothing and E-commerce business, INDIA<br>
      - Malik Wasim, Digital Creator, Pakistan<br>
    <b> AND COUNTING...`
  } else if (input == "Our Services") {
    return `Here are our Highly Recommended Services that you might be looking for.<br>
      - <b> Website Design and Development</b><br>
      - Android App Development<br>
      - <b> WordPress Development</b><br>
      - Membership Design and Development<br>
      - <b> Social Media Management</b><br>
      - Graphics Designing<br>
      - <b> Google & Facebook Ads</b><br>
      - Google My Business Management<br>
      <b>Learn more about our services ` + "here".link("https://businessara.tech")
  }
  else {
    return "Talk with a live expert now" + result;
  }
}
