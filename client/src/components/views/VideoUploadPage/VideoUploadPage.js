import React from "react";
import { Typography, Button, Form, message, Input, Icon } from "antd";
import Dropzone from "react-dropzone";

const { Title } = Typography;
const { TextArea } = Input;

function VideoUploadPage() {
  return (
    <div style={{ maxWidth: "700px", margin: "2rem auto" }}>
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <Title level={2}>Upload Video</Title>
      </div>

      <Form onSubmit>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {/* 파일 드랍하는 부분*/}
          <Dropzone onDrop multiple maxSize>
            {({ getRootProps, getInputProps }) => (
              <div
                style={{
                  width: "300px",
                  height: "240px",
                  border: "1px solid lightgray",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                {...getRootProps()}
              >
                <input {...getInputProps()} />
                <Icon type="plus" style={{ fontSize: "3rem" }} />
              </div>
            )}
          </Dropzone>
          {/* 썸네일(업로드한 이미지 확인) */}
          <div>
            <img src alt />
          </div>
        </div>

        <br></br>
        <br></br>
        <label>Title</label>
        <Input onChange value></Input>

        <br></br>
        <br></br>
        <label>Description</label>
        <TextArea onChange value></TextArea>

        <br></br>
        <br></br>
        <select onChange>
          <option key value></option>
        </select>
        <br></br>
        <br></br>

        <select onChange>
          <option key value></option>
        </select>
        <br></br>
        <br></br>
        <Button type="primary" size="large" onClick>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default VideoUploadPage;
