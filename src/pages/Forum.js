import React from 'react'
import { FaExpand } from 'react-icons/fa'
import { FaTimes } from 'react-icons/fa'
import CardQuestion from '../components/CardQuestion'
import './forum.css'
export default function Forum() {

    return (
    <div>
        <div className="topCards">
                <h1>SEZIONE QnA</h1>

        </div>
        <div className="questionsContainer">
          <div className="questions">
                <CardQuestion />
                <CardQuestion />
                <CardQuestion />
                <CardQuestion />


          </div>

            </div>

        </div>
            )
}
