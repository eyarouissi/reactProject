import React from 'react'

type DocumentationInterface = {
  header: String
  body: String
}

export function Documentation(props: DocumentationInterface) {
  return (
    <a
      href="https://nextjs.org/docs"
      className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
    >
      <h3 className="text-2xl font-bold">{props.header} &rarr;</h3>
      <p className="mt-4 text-xl">{props.body}</p>
    </a>
  )
}
