import React from 'react'
import './galleria.css'
import { useColorModeValue } from '@chakra-ui/react'
export default function Galleria() {
   
  return (
      <div className="root"><div class="containerGallery">

          <h1 
          class="headingGallery"

          > Foto dei nostri eventi<span></span></h1>

          <div class="gallery">

              <div class="gallery-item">
                  <img class="gallery-image" src="https://images.unsplash.com/photo-1596496050755-c923e73e42e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1453&q=80"/>
              </div>

              <div class="gallery-item">
                  <img class="gallery-image" src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="sunset behind San Francisco city skyline"/>
              </div>

              <div class="gallery-item">
                  <img class="gallery-image" src="https://images.unsplash.com/photo-1596496356956-bbc213c96988?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="people holding umbrellas on a busy street at night lit by street lights and illuminated signs in Tokyo, Japan"/>
              </div>

              <div class="gallery-item">
                  <img class="gallery-image" src="https://images.unsplash.com/photo-1596495577886-d920f1fb7238?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60" alt="car interior from central back seat position showing driver and blurred view through windscreen of a busy road at night"/>
              </div>

              <div class="gallery-item">
                  <img class="gallery-image" src="https://images.unsplash.com/photo-1596496181848-3091d4878b24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="back view of woman wearing a backpack and beanie waiting to cross the road on a busy street at night in New York City, USA"/>
              </div>

              <div class="gallery-item">
                  <img class="gallery-image" src="https://images.unsplash.com/photo-1596496050827-8299e0220de1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="man wearing a black jacket, white shirt, blue jeans, and brown boots, playing a white electric guitar while sitting on an amp"/>
              </div>

          </div>

      </div></div>
  )
}
