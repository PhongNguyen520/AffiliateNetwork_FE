import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./CreateLinkStep3.module.scss";
import { Link, useLocation } from "react-router-dom";
import config from "../../../../config";
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const cx = classNames.bind(styles);

export const ArrowLeftIcon = ({ className }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.8332 10H4.1665"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.99984 15.8334L4.1665 10.0001L9.99984 4.16675"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ArrowRightIcon = ({ className }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.1665 10H15.8332"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 4.16675L15.8333 10.0001L10 15.8334"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const SparklesIcon = ({ className }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.33317 3.33325L9.1665 6.66659L12.4998 7.49992L9.1665 8.33325L8.33317 11.6666L7.49984 8.33325L4.1665 7.49992L7.49984 6.66659L8.33317 3.33325Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.1668 11.6667L14.5835 13.3334L16.2502 13.75L14.5835 14.1667L14.1668 15.8334L13.7502 14.1667L12.0835 13.75L13.7502 13.3334L14.1668 11.6667Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const DocumentTextIcon = ({ className }) => (
  <svg
    className={className}
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M7 7H17"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7 12H17"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7 17H13"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ClipboardIcon = ({ className }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.3333 3.33325H15.8333C16.2754 3.33325 16.6993 3.50885 17.0118 3.82141C17.3244 4.13397 17.5 4.55789 17.5 4.99992V16.6666C17.5 17.1086 17.3244 17.5325 17.0118 17.8451C16.6993 18.1577 16.2754 18.3333 15.8333 18.3333H4.16667C3.72464 18.3333 3.30072 18.1577 2.98816 17.8451C2.67559 17.5325 2.5 17.1086 2.5 16.6666V4.99992C2.5 4.55789 2.67559 4.13397 2.98816 3.82141C3.30072 3.50885 3.72464 3.33325 4.16667 3.33325H6.66667"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.5 1.66675H7.5C7.03976 1.66675 6.66667 2.03984 6.66667 2.50008V4.16675C6.66667 4.62699 7.03976 5.00008 7.5 5.00008H12.5C12.9602 5.00008 13.3333 4.62699 13.3333 4.16675V2.50008C13.3333 2.03984 12.9602 1.66675 12.5 1.66675Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const CheckIcon = ({ className }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.6668 5L7.50016 14.1667L3.3335 10"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const LoadingIcon = ({ className }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 1.66675V5.00008"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 15V18.3333"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.1084 4.10828L6.4667 6.46661"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.5334 13.5333L15.8918 15.8916"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M1.6665 10H4.99984"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15 10H18.3333"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.1084 15.8916L6.4667 13.5333"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.5334 6.46661L15.8918 4.10828"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CreateLinkStep3 = () => {
  const [generatedPosts, setGeneratedPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [copied, setCopied] = useState(false);
  const location = useLocation();
  const { responseData } = location.state || {};
  console.log(responseData);
  
  const systemInstruction = `
Bạn là một trợ lý AI chuyên tạo các bài post quảng cáo cho các chiến dịch affiliate. Nhiệm vụ của bạn là tạo ra các bài post hấp dẫn, thu hút người đọc và phù hợp với các nền tảng như Facebook, Instagram, hoặc blog.

**Yêu cầu:**
1. Mỗi bài post phải bao gồm:
   - Một tiêu đề hấp dẫn.
   - Nội dung mô tả chi tiết về chiến dịch, ưu đãi và lợi ích.
   - Một mảng các ưu đãi (offer).
   - Một kết luận kêu gọi hành động.
   - Đường link affiliate được đặt ở cuối bài post.
2. Bài post phải nhấn mạnh các ưu đãi và lợi ích của chiến dịch.
3. Bài post phải có giọng văn tích cực, thu hút và kêu gọi hành động (ví dụ: "Đừng bỏ lỡ!", "Mua ngay!", "Truy cập ngay!").
4. Bài post phải phù hợp với các nền tảng mạng xã hội, bao gồm cả việc sử dụng các ký tự đặc biệt (ví dụ: 🔥, 🎉, ⏳) để tăng tính thu hút.
5. Trả về kết quả dưới dạng JSON với cấu trúc:
   [
     {
       "title": "Tiêu đề bài post",
       "content": "Nội dung bài post",
       "offer": ["Ưu đãi 1", "Ưu đãi 2", "Ưu đãi 3"],
       "conclusion": "Kết luận kêu gọi hành động",
       "link": "Đường link affiliate"
     },
     ...
   ]
`;

  const genAI = new GoogleGenerativeAI(process.env.REACT_APP_API_KEY);
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-lite",
    systemInstruction: systemInstruction,
  });

  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };

  const handleGeneratePosts = async () => {
    if (!responseData) {
      alert("Không có dữ liệu chiến dịch.");
      return;
    }

    setIsLoading(true);
    setGeneratedPosts([]);

    try {
      const prompt = `
        Tạo 5 bài post quảng cáo bằng tiếng Anh cho chiến dịch ${responseData.campaignName} với các thông tin sau:
        - Tiêu đề: ${responseData.campaignName}
        - Mô tả: ${responseData.description}
        - Ưu đãi: ${responseData.introduction}
        - Đường link: ${responseData.urlShorten}
      `;

      const chatSession = model.startChat({
        generationConfig,
        history: [],
      });

      const result = await chatSession.sendMessage(prompt);
      const response = JSON.parse(result.response.text());

      setGeneratedPosts(response);
      setCurrentPage(0);
    } catch (error) {
      console.error("Lỗi khi gọi API:", error);
      alert("Đã có lỗi xảy ra. Vui lòng thử lại.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopyContent = () => {
    if (generatedPosts.length === 0 || !generatedPosts[currentPage]) return;
    
    const post = generatedPosts[currentPage];
    const contentToCopy = `${post.title}\n\n${post.content}\n\n${post.offer.map(o => `• ${o}`).join('\n')}\n\n${post.conclusion}\n\n${post.link}`;
    
    navigator.clipboard.writeText(contentToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < generatedPosts.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className={cx("create-content-container")}>
      <div className={cx("steps-container")}>
        <div className={cx("step", "completed")}>
          <div className={cx("step-circle")}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5 13.5L4 10L3 11L7.5 15.5L17.5 5.5L16.5 4.5L7.5 13.5Z"
                fill="white"
              />
            </svg>
          </div>
          <div className={cx("step-title")}>Choose product</div>
        </div>
        <div className={cx("step", "completed")}>
          <div className={cx("step-circle")}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5 13.5L4 10L3 11L7.5 15.5L17.5 5.5L16.5 4.5L7.5 13.5Z"
                fill="white"
              />
            </svg>
          </div>
          <div className={cx("step-title")}>Get Link</div>
        </div>
        <div className={cx("step", "active")}>
          <div className={cx("step-circle")}>03</div>
          <div className={cx("step-title")}>Create Content</div>
        </div>
      </div>

      <div className={cx("content-section")}>
        <div className={cx("generate-button-container")}>
          <button
            className={cx("generate-posts-btn")}
            onClick={handleGeneratePosts}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <LoadingIcon className={cx("icon-spin")} /> Generating...
              </>
            ) : (
              <>
                <SparklesIcon /> Generate Post
              </>
            )}
          </button>
        </div>

        {isLoading ? (
          <div className={cx("loading-container")}>
            <div className={cx("logo-wrapper")}>
              <SparklesIcon />
            </div>
            <div className={cx("loading-spinner")}></div>
            <p className={cx("loading-text")}>Creating amazing content for your campaign...</p>
          </div>
        ) : generatedPosts.length > 0 && generatedPosts[currentPage] ? (
          <div className={cx("post-display-container")}>
            <div className={cx("post-card")}>
              <div className={cx("post-header")}>
                <div className={cx("post-number")}>
                  <span>Post {currentPage + 1}/5</span>
                </div>
                <button 
                  className={cx("copy-button", { copied })} 
                  onClick={handleCopyContent}
                >
                  {copied ? (
                    <>
                      <CheckIcon /> Copied!
                    </>
                  ) : (
                    <>
                      <ClipboardIcon /> Copy Post
                    </>
                  )}
                </button>
              </div>
              
              <div className={cx("post-content")}>
                <h2 className={cx("post-title")}>{generatedPosts[currentPage].title}</h2>
                
                <div className={cx("post-description")}>
                  <p>{generatedPosts[currentPage].content}</p>
                </div>
                
                <div className={cx("post-offers")}>
                  <h3 className={cx("offers-title")}>Key Benefits:</h3>
                  <ul className={cx("offers-list")}>
                    {generatedPosts[currentPage].offer.map((offer, i) => (
                      <li key={i} className={cx("offer-item")}>
                        <span className={cx("offer-bullet")}>•</span> {offer}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className={cx("post-conclusion")}>
                  <p>{generatedPosts[currentPage].conclusion}</p>
                </div>
                
                <div className={cx("post-link")}>
                  <a
                    href={generatedPosts[currentPage].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cx("affiliate-link")}
                  >
                    {generatedPosts[currentPage].link}
                  </a>
                </div>
              </div>
            </div>
            
            <div className={cx("pagination-controls")}>
              <button 
                className={cx("pagination-button", "prev", { disabled: currentPage === 0 })}
                onClick={handlePrevPage}
                disabled={currentPage === 0}
              >
                <ArrowLeftIcon /> Previous
              </button>
              
              <div className={cx("pagination-dots")}>
                {generatedPosts.map((_, index) => (
                  <button
                    key={index}
                    className={cx("pagination-dot", { active: currentPage === index })}
                    onClick={() => setCurrentPage(index)}
                    aria-label={`Page ${index + 1}`}
                  />
                ))}
              </div>
              
              <button 
                className={cx("pagination-button", "next", { disabled: currentPage === generatedPosts.length - 1 })}
                onClick={handleNextPage}
                disabled={currentPage === generatedPosts.length - 1}
              >
                Next <ArrowRightIcon />
              </button>
            </div>
          </div>
        ) : (
          <div className={cx("empty-state")}>
            <div className={cx("empty-state-content")}>
              <div className={cx("logo-wrapper")}>
              </div>
              <h3 className={cx("empty-state-title")}>Ready to create engaging posts?</h3>
              <p className={cx("empty-state-description")}>
                Click the "Generate 5 Posts" button above to create compelling content for your affiliate campaign.
              </p>
              <DocumentTextIcon className={cx("empty-state-icon")} />
            </div>
          </div>
        )}
      </div>

      <div className={cx("action-buttons")}>
        <Link to={config.routes.home}>
          <button className={cx("btn", "btn-primary")}>Go to home</button>
        </Link>
      </div>
    </div>
  );
};

export default CreateLinkStep3;