import React from 'react'
import './CardQuestion.css'

export default function CardAnswer({risposta}) {
  return (
    <section class="question-card job">
                  <header>
                      <img src={risposta.risposta.immagine_profilo} />
                      <span>{risposta.risposta.Nome} {risposta.risposta.Cognome}</span>
                  </header>
                  <p>
                     {risposta.risposta.contenuto}
                  </p>
                  <footer>
                      <div class="question-info">
                          100
                      </div>

                  </footer>
              </section>
  )
}
