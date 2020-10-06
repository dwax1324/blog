import { Form, Formik } from "formik"
import Router from "next/router"
import React, { useRef } from "react"
import { useLoginMutation } from "../generated/graphql"
import { withApollo } from "../utils/withApollo"

const admin: React.FC<{}> = () => {
  const router = Router
  const [login] = useLoginMutation()
  const idEl = useRef(null)
  const passwordEl = useRef(null)

  let handleSubmit = async () => {
    // e.preventDefault();
    const id = idEl.current.value
    const password = passwordEl.current.value
    const data = await login({
      variables: { id: id, password: password },
    })
    if (data.data.login) router.push("/")
    else alert("authentication failed")
  }
  return (
    <>
      <Formik
        initialValues={{
          id: "",
          password: "",
        }}
        onSubmit={handleSubmit}
      >
        <Form>
          <input name="id" ref={idEl} type="text" />
          <input name="password" ref={passwordEl} type="password" />
          <button type="submit">submit</button>
        </Form>
      </Formik>
    </>
  )
}

export default withApollo({ ssr: false })(admin)
3
