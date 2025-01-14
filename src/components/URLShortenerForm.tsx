'use client';

import { postForm } from "@/actions/post-form";

const UrlShortenerForm = () =>  {


  return (

    <form onSubmit={postForm}>
      <label htmlFor="url">URL</label>
      <input type="text" id='url' placeholder="https://mylongurl.com" />
      <input type="submit" value="Shorten!!!" />
    </form>


  )
}

export default UrlShortenerForm;
