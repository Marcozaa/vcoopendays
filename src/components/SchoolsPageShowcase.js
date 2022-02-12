import './showcase.css'

const SchoolsPageShowcase = () => {

    const imgContent = document.querySelectorAll('.img-content-hover');

function showImgContent(e) {
  for(var i = 0; i < imgContent.length; i++) {
    var x = e.pageX;
    var y = e.pageY;
    imgContent[i].style.transform = `translate3d(${x}px, ${y}px, 0)`;
  }
};

document.addEventListener('mousemove', showImgContent);
    return ( <div>
        <nav>
  <div class="container">
    <div class="grid">
      <div class="column-xs-12 column-md-10">
        <p id="highlight">Showcase vcoopendays</p>
      </div>
      <div class="column-xs-12 column-md-2">
        <ul>
        
        </ul>
      </div>
    </div>
  </div>
</nav>
<section class="gallery">
  <div class="container">
    <div class="grid">
      <div class="column-xs-12 column-md-4">
        <figure class="img-container">
          <img src="https://source.unsplash.com/8b1cWDyvT7Y" />
          <figcaption class="img-content">
            <h2 class="title">Smart Watch</h2>
            <h3 class="category">Showcase</h3>
          </figcaption>
          <span class="img-content-hover">
            <h2 class="title">Smart Watch</h2>
            <h3 class="category">Showcase</h3>
          </span>
        </figure>
      </div>
      <div class="column-xs-12 column-md-4">
        <figure class="img-container">
          <img src="https://source.unsplash.com/5VXH4RG88gc" />
          <figcaption class="img-content">
            <h2 class="title">Camera Film</h2>
            <h3 class="category">Showcase</h3>
          </figcaption>
          <span class="img-content-hover">
            <h2 class="title">Camera Film</h2>
            <h3 class="category">Showcase</h3>
          </span>
        </figure>
      </div>
      <div class="column-xs-12 column-md-4">
        <figure class="img-container">
          <img src="https://source.unsplash.com/XtUd5SiX464"/>
          <figcaption class="img-content">
            <h2 class="title">Coffee</h2>
            <h3 class="category">Showcase</h3>
          </figcaption>
          <span class="img-content-hover">
            <h2 class="title">Coffee</h2>
            <h3 class="category">Showcase</h3>
          </span>
        </figure>
      </div>
      <div class="column-xs-12 column-md-6">
        <figure class="img-container">
          <img src="https://source.unsplash.com/JYGnB9gTCls" />
          <figcaption class="img-content">
            <h2 class="title">Phone</h2>
            <h3 class="category">Showcase</h3>
          </figcaption>
          <span class="img-content-hover">
            <h2 class="title">Phone</h2>
            <h3 class="category">Showcase</h3>
          </span>
        </figure>
      </div>
      <div class="column-xs-12 column-md-6">
        <figure class="img-container">
          <img src="https://source.unsplash.com/-RBuQ2PK_L8" />
          <figcaption class="img-content">
            <h2 class="title">Keyboard</h2>
            <h3 class="category">Showcase</h3>
          </figcaption>
          <span class="img-content-hover">
            <h2 class="title">Keyboard</h2>
            <h3 class="category">Showcase</h3>
          </span>
        </figure>
      </div>
      <div class="column-xs-12">
        <figure class="img-container">
          <img src="https://source.unsplash.com/P44RIGl9V54" />
          <figcaption class="img-content">
            <h2 class="title">Wrist Watch</h2>
            <h3 class="category">Showcase</h3>
          </figcaption>
          <span class="img-content-hover">
            <h2 class="title">Wrist Watch</h2>
            <h3 class="category">Showcase</h3>
          </span>
        </figure>
      </div>
    </div>
  </div>
</section>

    </div> );
}
 
export default SchoolsPageShowcase;