import { createApi } from "@reduxjs/toolkit/dist/query/react";
import customFetchBase from "./customFetchBase";
import {
  IChatbotInfo,
  IChatbotItem,
  IGenericResponse,
  IPhoneNumberInfo,
} from "./types";

export const chatbotApi = createApi({
  reducerPath: "chatbotApi",
  baseQuery: customFetchBase,
  endpoints: (builder) => ({
    createChatbot: builder.mutation<IGenericResponse, FormData>({
      query(data) {
        return {
          method: "POST",
          url: "/chatbots",
          body: data,
        };
      },
    }),
    getChatbots: builder.query<IChatbotItem[], void>({
      query() {
        return {
          url: "/chatbots",
        };
      },
      transformResponse: (result: { data: IChatbotItem[] }) => result.data,
    }),
    getChatbot: builder.query<IChatbotInfo, { slug: string }>({
      query({ slug }) {
        return {
          url: `/chatbots/${slug}`,
        };
      },
      transformResponse: (result: { data: IChatbotInfo }) => result.data,
    }),
    chat: builder.mutation<
      { msg: string; audioBase64: string },
      { slug: string; msg: { type: string; text: string }[] }
    >({
      query({ slug, msg }) {
        return {
          method: "POST",
          url: `/chatbots/${slug}/chat`,
          body: {
            msg,
          },
        };
      },
      transformResponse: (result: {
        data: { msg: string; audioBase64: string };
      }) => result.data,
    }),
    // makeCall: builder.query<boolean, { phoneNumber: any }>({
    //   query({ phoneNumber }) {
    //     return {
    //       url: `/../make-call/${phoneNumber}`,
    //     };
    //   },
    //   transformResponse: (result: { data: boolean }) => result.data,
    // }),
    makeCall: builder.query<boolean, { slug: string; phoneNumber: string }>({
      query({ slug, phoneNumber }) {
        return {
          url: `/../make-call/${slug}/${phoneNumber}`,
        };
      },
      transformResponse: (result: { data: boolean }) => result.data,
    }),
  }),
});

export const {
  useCreateChatbotMutation,
  useGetChatbotsQuery,
  useGetChatbotQuery,
  useMakeCallQuery,
  useChatMutation,
} = chatbotApi;
