document.getElementById('add-testimonial-btn').addEventListener('click', function() {
  // Prompt the user for testimonial text and author name
  const testimonialText = prompt("Inserisci il testo della testimonianza:");
  const testimonialAuthor = prompt("Inserisci il nome dell'autore:");

  // Create a new div element for the testimonial
  const newTestimonial = document.createElement('div');
  newTestimonial.classList.add('col-md-4');
  newTestimonial.id = 'testimonianza';

  // Create the inner HTML for the new testimonial
  newTestimonial.innerHTML = `
    <div class="testimonial bg-secondary p-4 rounded">
      <p class="testimonial-text">"${testimonialText}"</p>
      <p class="testimonial-author">- ${testimonialAuthor}</p>
    </div>
  `;

  // Append the new testimonial to the testimonials section
  document.querySelector('.testimonials .row').appendChild(newTestimonial);
  //The querySelector method selects the first element that matches the specified CSS selector(s).
});
