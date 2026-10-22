export const isChatGPTUserAgent = (userAgent?: string): boolean => (userAgent ? /chatgpt/iu.test(userAgent) : false);
