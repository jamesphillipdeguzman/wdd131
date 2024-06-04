document.addEventListener('DOMContentLoaded', () => {
  document.getElementById("lastModified").innerHTML = document.lastModified;

  // use the date object
  const today = new Date();
  const year = document.querySelector("#currentyear");
  if (year) {
    year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;
  }

  const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];

  const dynamicProduct = document.querySelector('#dynamic-product'); // Fixed selector

  function populateDropdown(dynamicProduct, products) {
    dynamicProduct.innerHTML = '<option value="" disabled selected>Select a product...</option>';
    products.forEach(product => {
      const option = document.createElement('option');
      // option.id = 'dynamicProduct';
      option.value = product.id;
      option.textContent = product.name;
      dynamicProduct.appendChild(option);
    });
  }

  // Populate the dropdown immediately when the DOM is loaded
  populateDropdown(dynamicProduct, products);

  // Define local storage here
  function lsSubmitCount() {
    // initialize display elements
    const submitDisplay = document.querySelector('#submit-count');

    // get the stored value in localStorage
    let numSubmit = Number(window.localStorage.getItem('submit-ls')) || 0;

    // determine if this is the first submission
    if (numSubmit !== 0) {
      submitDisplay.textContent = numSubmit;
    } else {
      submitDisplay.textContent = `0`;
    }

    // store new number of submissions
    localStorage.setItem('submit-ls', numSubmit);
  }

  lsSubmitCount();

  const reviewBtn = document.querySelector('#review-btn');

  reviewBtn.addEventListener('submit', (event) => {
    const productSelected = dynamicProduct.value !== '';
    const starsSelected = document.querySelector('input[name="stars"]:checked') !== null;
    const dateSelected = document.querySelector('#date-installed').value !== '';

    if (!productSelected || !starsSelected || !dateSelected) {
      event.preventDefault();
      alert("Please select a product before proceeding.");

    } else {
      // Update the submission count in local storage
      let numSubmit = Number(window.localStorage.getItem('submit-ls')) || 0;
      numSubmit++;
      localStorage.setItem('submit-ls', numSubmit);
      lsSubmitCount(); // Update the display

      // Open the review page when user clicks on review button
      // window.location.href = 'project/review.html';
    }

  });
});
