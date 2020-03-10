import React, { useState, useRef, useEffect } from "react";
import { useField } from "@rocketseat/unform";
import api from "../../../services/api";
import { Container } from "./styles";

export default function Avatarinput() {
  const { defaultValue, registerField } = useField("avatar");

  const [file, setFile] = useState(defaultValue && defaultValue.id);

  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: "avatar_id",
        ref: ref.current,
        path: "dataset.file"
      });
    }
  }, [ref, registerField]);

  async function handlechange(e) {
    const data = new FormData();

    data.append("file", e.target.files[0]);

    const response = await api.post("files", data);

    const { id, url } = response.data;
    setFile(id);
    setPreview(url);
  }

  return (
    <Container>
      <label>
        <img
          src={
            preview ||
            "https://d13es1p1rl0iq1.cloudfront.net/wp-content/uploads/2019/09/plenonews_69429078_424547198412357_2917137491588994799_n-1024x684.jpg"
          }
          alt=""
        />
        <input
          type="file"
          id="avatar"
          accept="image/*"
          data-file={file}
          onChange={handlechange}
          ref={ref}
        />
      </label>
    </Container>
  );
}
