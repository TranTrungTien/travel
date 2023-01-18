import { PlusOutlined, UploadOutlined } from "@ant-design/icons";
import { Button, Col, Divider, Form, Input, Modal, Select, Upload } from "antd";
import { categories } from "../model";

const CreateNewPost = ({
  openModal,
  closeModal,
}: {
  openModal: boolean;
  closeModal: () => void;
}) => {
  const [form] = Form.useForm();
  const getFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };
  const handleSubmit = (values: any) => {
    console.log(form.getFieldsValue());
  };
  return (
    <Modal
      destroyOnClose
      open={openModal}
      className="min-w-[60%]"
      closable
      onCancel={closeModal}
      centered
      title={
        <h3 className="w-full text-blue-500 text-lg text-center">
          Thêm bài viết mới
        </h3>
      }
      footer={
        <div>
          <button
            className="px-8 py-3 rounded bg-blue-500 text-white"
            onClick={handleSubmit}
          >
            Lưu
          </button>
        </div>
      }
    >
      <div className="w-full h-full min-h-[500px] max-h-[500px] overflow-x-hidden overflow-y-scroll">
        <Form
          form={form}
          onFinish={handleSubmit}
          className="w-full h-full p-10"
        >
          <div>
            <span>Tiêu Đề Lớn</span>
            <Form.Item name="title">
              <Input className="h-10" />
            </Form.Item>
          </div>
          <span>Chọn chủ đề</span>
          <Form.Item name="type" className="w-56" label="">
            <Select
              className="h-10"
              placeholder="Chủ đề"
              options={categories}
            />
          </Form.Item>
          <Divider />
          <Form.List name="sections" initialValue={[{}]}>
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, ...restField }) => (
                  <>
                    <div className="relative">
                      <div>
                        <span>Tiêu Đề Nhỏ</span>
                        <Form.Item name="content-title">
                          <Input className="h-10" />
                        </Form.Item>
                      </div>
                      <div>
                        <span>Nội dung</span>
                        <Form.Item {...restField} name={[name, "content"]}>
                          <Input.TextArea rows={10} />
                        </Form.Item>
                      </div>
                      <div>
                        <span>Thêm ảnh</span>
                        <Form.Item
                          getValueFromEvent={getFile}
                          name={[name, "file"]}
                        >
                          <Upload>
                            <Button icon={<UploadOutlined />}>
                              Chọn ảnh từ máy tính
                            </Button>
                          </Upload>
                        </Form.Item>
                      </div>
                      <button
                        className="absolute bottom-0 right-0 px-6 py-2 rounded text-sm font-light bg-red-500 text-white"
                        onClick={() => remove(name)}
                      >
                        Xóa nội dung
                      </button>
                    </div>
                    <Divider />
                  </>
                ))}
                <Form.Item className="w-full text-center">
                  <Button
                    type="dashed"
                    className="max-w-min mx-auto h-12"
                    onClick={() => add()}
                    block
                    icon={<PlusOutlined />}
                  >
                    Thêm nội dung
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
        </Form>
      </div>
    </Modal>
  );
};

export default CreateNewPost;
