import React from 'react'
import './CardQuestion.css'
export default function CardQuestion() {
  return (
      <div className='cardQuestion'>
          <link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700" rel="stylesheet" />

        
              <section class="question-card">
                  <header>
                      <img src="https://i.ytimg.com/vi/wYZux3BMc5k/maxresdefault.jpg" />
                      <span>Julinho da Vanilla JS</span>
                  </header>
                  <p>
                      Sapete che il Benzi faceva palestra? Ci ha detto che faceva 220kg di panca piana
                  </p>
                  <footer>
                      <div class="question-info">
                          100
                      </div>
                      <div class="question-tags">
                          <span class="tag">Python</span>
                          <span class="tag">Coding</span>
                      </div>
                  </footer>
              </section>

              <section class="question-card job">
                  <header>
                      <img src="https://i.ytimg.com/vi/wYZux3BMc5k/maxresdefault.jpg" />
                      <span>Julinho da Vanilla JS</span>
                  </header>
                  <p>
                      NO non lo sapevo. 
                  </p>
                  <footer>
                      <div class="question-info">
                          100
                      </div>
                      <div class="question-tags">
                          <span class="tag">Python</span>
                          <span class="tag">Python</span>
                          <span class="tag">Python</span>
                          <span class="tag">Python</span>
                          <span class="tag">Python</span>
                          <span class="tag">Python</span>
                      </div>
                  </footer>
              </section>
         
      </div>
  )
}
