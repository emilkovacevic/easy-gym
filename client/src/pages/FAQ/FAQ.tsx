import { useState } from 'react'
import data from './data'
import SingleQuestion from './Question'

type Props = {}

const FAQ = (props: Props) => {
    const [questions] = useState(data)
    return (
        <main className='max-w-5xl mx-auto my-20 flex-wrap'>
            <div className='rounded-lg bg-light-middle dark:bg-dark-middle p-5 shadow-md'>
                <h3 className='py-4 text-center text-2xl font-medium'>FAQs</h3>
                <section>
                    {questions.map((question) => (
                        <SingleQuestion key={question.id} {...question} />
                    ))}
                </section>
            </div>
        </main>
    )
}

export default FAQ

