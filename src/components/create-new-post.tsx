import { PlusOutlined, UploadOutlined } from "@ant-design/icons";
import {
  Button,
  Col,
  Divider,
  Form,
  Input,
  Modal,
  Select,
  Upload,
  message,
} from "antd";
import { IPost, categories } from "../model";
import { getRandomInt } from "../utils";
import { useContext, useEffect } from "react";
import { ThemeContext } from "../context";

const CreateNewPost = ({
  openModal,
  post,
  closeModal,
}: {
  post?: IPost;
  openModal: boolean;
  closeModal: () => void;
}) => {
  const { setNewPost, editPost } = useContext(ThemeContext);
  const [form] = Form.useForm();

  useEffect(() => {
    if (post) {
      console.log({ post });
      form.setFieldsValue({
        ["title"]: post?.title,
        ["category"]: post?.category,
        ["sections"]: post?.sections,
      });
    }
  }, [post]);

  const getFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };
  const handleSubmit = async () => {
    const values = form.getFieldsValue();

    if (!post) {
      const newPost: IPost = {
        author: "",
        category: 0,
        comments: [],
        id: getRandomInt(1, 99999),
        sections: [],
        time: new Date().toDateString(),
        title: "",
      };
      newPost.title = values?.title || "";
      newPost.category = values?.category || 0;
      newPost.author = "Admin";
      const sections = values?.sections;
      const sectionsPromise = sections.map((section: any) =>
        getSection(section)
      );
      newPost.sections = await Promise.all(sectionsPromise);
      if (!newPost.title) return;
      setNewPost(newPost);
      message.success("Post bài thành công");
    } else {
      const sections = values?.sections;
      const sectionsPromise = sections.map((section: any) =>
        getSection(section)
      );
      const editedPost = {
        ...post,
        title: values?.title || "",
        category: values?.category || 0,
        sections: await Promise.all(sectionsPromise),
      };
      editPost(editedPost);
      message.success("Edit bài thành công");
    }
    closeModal();
  };
  const getSection = (section: any) => {
    return new Promise(async (resolve, reject) => {
      const newSection = {
        title: "",
        content: "",
        image: "",
      };
      newSection.title = section["title"] || "";
      newSection.content = section["content"] || "";

      const file = section["file"]?.[0]?.originFileObj as File | undefined;

      const imageBase64 = file
        ? ((await convertFileToBase64(file)) as string)
        : section?.image || "";
      newSection.image = imageBase64;
      resolve(newSection);
    });
  };
  const convertFileToBase64 = (file: File) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
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
            <Form.Item
              name="title"
              rules={[
                { required: true, message: " Tiêu đề không được trống!" },
              ]}
            >
              <Input className="h-10" />
            </Form.Item>
          </div>
          <span>Chọn chủ đề</span>
          <Form.Item
            name="category"
            rules={[{ required: true, message: "Chọn chủ đề!" }]}
            className="w-56"
            label=""
          >
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
                        <Form.Item name={[name, "title"]}>
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
