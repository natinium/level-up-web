# Overview

<Note>
  This page is a beginner-friendly introduction to high-level artificial
  intelligence (AI) concepts. To dive right into implementing the AI SDK, feel
  free to skip ahead to our [quickstarts](/docs/getting-started) or learn about
  our [supported models and providers](/docs/foundations/providers-and-models).
</Note>

The AI SDK standardizes integrating artificial intelligence (AI) models across [supported providers](/docs/foundations/providers-and-models). This enables developers to focus on building great AI applications, not waste time on technical details.

For example, here’s how you can generate text with various models using the AI SDK:

<PreviewSwitchProviders />

To effectively leverage the AI SDK, it helps to familiarize yourself with the following concepts:

## Generative Artificial Intelligence

**Generative artificial intelligence** refers to models that predict and generate various types of outputs (such as text, images, or audio) based on what’s statistically likely, pulling from patterns they’ve learned from their training data. For example:

- Given a photo, a generative model can generate a caption.
- Given an audio file, a generative model can generate a transcription.
- Given a text description, a generative model can generate an image.

## Large Language Models

A **large language model (LLM)** is a subset of generative models focused primarily on **text**. An LLM takes a sequence of words as input and aims to predict the most likely sequence to follow. It assigns probabilities to potential next sequences and then selects one. The model continues to generate sequences until it meets a specified stopping criterion.

LLMs learn by training on massive collections of written text, which means they will be better suited to some use cases than others. For example, a model trained on GitHub data would understand the probabilities of sequences in source code particularly well.

However, it's crucial to understand LLMs' limitations. When asked about less known or absent information, like the birthday of a personal relative, LLMs might "hallucinate" or make up information. It's essential to consider how well-represented the information you need is in the model.

## Embedding Models

An **embedding model** is used to convert complex data (like words or images) into a dense vector (a list of numbers) representation, known as an embedding. Unlike generative models, embedding models do not generate new text or data. Instead, they provide representations of semantic and syntactic relationships between entities that can be used as input for other models or other natural language processing tasks.

In the next section, you will learn about the difference between models providers and models, and which ones are available in the AI SDK.

# Providers and Models

Companies such as OpenAI and Anthropic (providers) offer access to a range of large language models (LLMs) with differing strengths and capabilities through their own APIs.

Each provider typically has its own unique method for interfacing with their models, complicating the process of switching providers and increasing the risk of vendor lock-in.

To solve these challenges, AI SDK Core offers a standardized approach to interacting with LLMs through a [language model specification](https://github.com/vercel/ai/tree/main/packages/provider/src/language-model/v2) that abstracts differences between providers. This unified interface allows you to switch between providers with ease while using the same API for all providers.

Here is an overview of the AI SDK Provider Architecture:

<MDXImage
  srcLight="/images/ai-sdk-diagram.png"
  srcDark="/images/ai-sdk-diagram-dark.png"
  width={800}
  height={800}
/>

## AI SDK Providers

The AI SDK comes with a wide range of providers that you can use to interact with different language models:

- [xAI Grok Provider](/providers/ai-sdk-providers/xai) (`@ai-sdk/xai`)
- [OpenAI Provider](/providers/ai-sdk-providers/openai) (`@ai-sdk/openai`)
- [Azure OpenAI Provider](/providers/ai-sdk-providers/azure) (`@ai-sdk/azure`)
- [Anthropic Provider](/providers/ai-sdk-providers/anthropic) (`@ai-sdk/anthropic`)
- [Amazon Bedrock Provider](/providers/ai-sdk-providers/amazon-bedrock) (`@ai-sdk/amazon-bedrock`)
- [Google Generative AI Provider](/providers/ai-sdk-providers/google-generative-ai) (`@ai-sdk/google`)
- [Google Vertex Provider](/providers/ai-sdk-providers/google-vertex) (`@ai-sdk/google-vertex`)
- [Mistral Provider](/providers/ai-sdk-providers/mistral) (`@ai-sdk/mistral`)
- [Together.ai Provider](/providers/ai-sdk-providers/togetherai) (`@ai-sdk/togetherai`)
- [Cohere Provider](/providers/ai-sdk-providers/cohere) (`@ai-sdk/cohere`)
- [Fireworks Provider](/providers/ai-sdk-providers/fireworks) (`@ai-sdk/fireworks`)
- [DeepInfra Provider](/providers/ai-sdk-providers/deepinfra) (`@ai-sdk/deepinfra`)
- [DeepSeek Provider](/providers/ai-sdk-providers/deepseek) (`@ai-sdk/deepseek`)
- [Cerebras Provider](/providers/ai-sdk-providers/cerebras) (`@ai-sdk/cerebras`)
- [Groq Provider](/providers/ai-sdk-providers/groq) (`@ai-sdk/groq`)
- [Perplexity Provider](/providers/ai-sdk-providers/perplexity) (`@ai-sdk/perplexity`)
- [ElevenLabs Provider](/providers/ai-sdk-providers/elevenlabs) (`@ai-sdk/elevenlabs`)
- [LMNT Provider](/providers/ai-sdk-providers/lmnt) (`@ai-sdk/lmnt`)
- [Hume Provider](/providers/ai-sdk-providers/hume) (`@ai-sdk/hume`)
- [Rev.ai Provider](/providers/ai-sdk-providers/revai) (`@ai-sdk/revai`)
- [Deepgram Provider](/providers/ai-sdk-providers/deepgram) (`@ai-sdk/deepgram`)
- [Gladia Provider](/providers/ai-sdk-providers/gladia) (`@ai-sdk/gladia`)
- [LMNT Provider](/providers/ai-sdk-providers/lmnt) (`@ai-sdk/lmnt`)
- [AssemblyAI Provider](/providers/ai-sdk-providers/assemblyai) (`@ai-sdk/assemblyai`)
- [Baseten Provider](/providers/ai-sdk-providers/baseten) (`@ai-sdk/baseten`)

You can also use the [OpenAI Compatible provider](/providers/openai-compatible-providers) with OpenAI-compatible APIs:

- [LM Studio](/providers/openai-compatible-providers/lmstudio)
- [Heroku](/providers/openai-compatible-providers/heroku)

Our [language model specification](https://github.com/vercel/ai/tree/main/packages/provider/src/language-model/v2) is published as an open-source package, which you can use to create [custom providers](/providers/community-providers/custom-providers).

The open-source community has created the following providers:

- [Ollama Provider](/providers/community-providers/ollama) (`ollama-ai-provider`)
- [FriendliAI Provider](/providers/community-providers/friendliai) (`@friendliai/ai-provider`)
- [Portkey Provider](/providers/community-providers/portkey) (`@portkey-ai/vercel-provider`)
- [Cloudflare Workers AI Provider](/providers/community-providers/cloudflare-workers-ai) (`workers-ai-provider`)
- [OpenRouter Provider](/providers/community-providers/openrouter) (`@openrouter/ai-sdk-provider`)
- [Aihubmix Provider](/providers/community-providers/aihubmix) (`@aihubmix/ai-sdk-provider`)
- [Requesty Provider](/providers/community-providers/requesty) (`@requesty/ai-sdk`)
- [Crosshatch Provider](/providers/community-providers/crosshatch) (`@crosshatch/ai-provider`)
- [Mixedbread Provider](/providers/community-providers/mixedbread) (`mixedbread-ai-provider`)
- [Voyage AI Provider](/providers/community-providers/voyage-ai) (`voyage-ai-provider`)
- [Mem0 Provider](/providers/community-providers/mem0)(`@mem0/vercel-ai-provider`)
- [Letta Provider](/providers/community-providers/letta)(`@letta-ai/vercel-ai-sdk-provider`)
- [Supermemory Provider](/providers/community-providers/supermemory)(`@supermemory/tools`)
- [Spark Provider](/providers/community-providers/spark) (`spark-ai-provider`)
- [AnthropicVertex Provider](/providers/community-providers/anthropic-vertex-ai) (`anthropic-vertex-ai`)
- [LangDB Provider](/providers/community-providers/langdb) (`@langdb/vercel-provider`)
- [Dify Provider](/providers/community-providers/dify) (`dify-ai-provider`)
- [Sarvam Provider](/providers/community-providers/sarvam) (`sarvam-ai-provider`)
- [Claude Code Provider](/providers/community-providers/claude-code) (`ai-sdk-provider-claude-code`)
- [Built-in AI Provider](/providers/community-providers/built-in-ai) (`built-in-ai`)
- [Gemini CLI Provider](/providers/community-providers/gemini-cli) (`ai-sdk-provider-gemini-cli`)
- [A2A Provider](/providers/community-providers/a2a) (`a2a-ai-provider`)
- [SAP-AI Provider](/providers/community-providers/sap-ai) (`@mymediset/sap-ai-provider`)
- [AI/ML API Provider](/providers/community-providers/aimlapi) (`@ai-ml.api/aimlapi-vercel-ai`)
- [MCP Sampling Provider](/providers/community-providers/mcp-sampling) (`@mcpc-tech/mcp-sampling-ai-provider`)
- [ACP Provider](/providers/community-providers/acp) (`@mcpc-tech/acp-ai-provider`)

## Self-Hosted Models

You can access self-hosted models with the following providers:

- [Ollama Provider](/providers/community-providers/ollama)
- [LM Studio](/providers/openai-compatible-providers/lmstudio)
- [Baseten](/providers/ai-sdk-providers/baseten)
- [Built-in AI](/providers/community-providers/built-in-ai)

Additionally, any self-hosted provider that supports the OpenAI specification can be used with the [OpenAI Compatible Provider](/providers/openai-compatible-providers).

## Model Capabilities

The AI providers support different language models with various capabilities.
Here are the capabilities of popular models:

| Provider                                                                 | Model                                       | Image Input         | Object Generation   | Tool Usage          | Tool Streaming      |
| ------------------------------------------------------------------------ | ------------------------------------------- | ------------------- | ------------------- | ------------------- | ------------------- |
| [xAI Grok](/providers/ai-sdk-providers/xai)                              | `grok-4`                                    | <Cross size={18} /> | <Check size={18} /> | <Check size={18} /> | <Check size={18} /> |
| [xAI Grok](/providers/ai-sdk-providers/xai)                              | `grok-3`                                    | <Cross size={18} /> | <Check size={18} /> | <Check size={18} /> | <Check size={18} /> |
| [xAI Grok](/providers/ai-sdk-providers/xai)                              | `grok-3-fast`                               | <Cross size={18} /> | <Check size={18} /> | <Check size={18} /> | <Check size={18} /> |
| [xAI Grok](/providers/ai-sdk-providers/xai)                              | `grok-3-mini`                               | <Cross size={18} /> | <Check size={18} /> | <Check size={18} /> | <Check size={18} /> |
| [xAI Grok](/providers/ai-sdk-providers/xai)                              | `grok-3-mini-fast`                          | <Cross size={18} /> | <Check size={18} /> | <Check size={18} /> | <Check size={18} /> |
| [xAI Grok](/providers/ai-sdk-providers/xai)                              | `grok-2-1212`                               | <Cross size={18} /> | <Check size={18} /> | <Check size={18} /> | <Check size={18} /> |
| [xAI Grok](/providers/ai-sdk-providers/xai)                              | `grok-2-vision-1212`                        | <Check size={18} /> | <Check size={18} /> | <Check size={18} /> | <Check size={18} /> |
| [xAI Grok](/providers/ai-sdk-providers/xai)                              | `grok-beta`                                 | <Cross size={18} /> | <Check size={18} /> | <Check size={18} /> | <Check size={18} /> |
| [xAI Grok](/providers/ai-sdk-providers/xai)                              | `grok-vision-beta`                          | <Check size={18} /> | <Cross size={18} /> | <Cross size={18} /> | <Cross size={18} /> |
| [Vercel](/providers/ai-sdk-providers/vercel)                             | `v0-1.0-md`                                 | <Check size={18} /> | <Check size={18} /> | <Check size={18} /> | <Check size={18} /> |
| [OpenAI](/providers/ai-sdk-providers/openai)                             | `gpt-5.2-pro`                               | <Check size={18} /> | <Check size={18} /> | <Check size={18} /> | <Check size={18} /> |
| [OpenAI](/providers/ai-sdk-providers/openai)                             | `gpt-5.2-chat-latest`                       | <Check size={18} /> | <Check size={18} /> | <Check size={18} /> | <Check size={18} /> |
| [OpenAI](/providers/ai-sdk-providers/openai)                             | `gpt-5.2`                                   | <Check size={18} /> | <Check size={18} /> | <Check size={18} /> | <Check size={18} /> |
| [OpenAI](/providers/ai-sdk-providers/openai)                             | `gpt-5`                                     | <Check size={18} /> | <Check size={18} /> | <Check size={18} /> | <Check size={18} /> |
| [OpenAI](/providers/ai-sdk-providers/openai)                             | `gpt-5-mini`                                | <Check size={18} /> | <Check size={18} /> | <Check size={18} /> | <Check size={18} /> |
| [OpenAI](/providers/ai-sdk-providers/openai)                             | `gpt-5-nano`                                | <Check size={18} /> | <Check size={18} /> | <Check size={18} /> | <Check size={18} /> |
| [OpenAI](/providers/ai-sdk-providers/openai)                             | `gpt-5.1-chat-latest`                       | <Check size={18} /> | <Check size={18} /> | <Check size={18} /> | <Check size={18} /> |
| [OpenAI](/providers/ai-sdk-providers/openai)                             | `gpt-5.1-codex-mini`                        | <Check size={18} /> | <Check size={18} /> | <Check size={18} /> | <Check size={18} /> |
| [OpenAI](/providers/ai-sdk-providers/openai)                             | `gpt-5.1-codex`                             | <Check size={18} /> | <Check size={18} /> | <Check size={18} /> | <Check size={18} /> |
| [OpenAI](/providers/ai-sdk-providers/openai)                             | `gpt-5.1`                                   | <Check size={18} /> | <Check size={18} /> | <Check size={18} /> | <Check size={18} /> |
| [OpenAI](/providers/ai-sdk-providers/openai)                             | `gpt-5-codex`                               | <Check size={18} /> | <Check size={18} /> | <Check size={18} /> | <Check size={18} /> |
| [OpenAI](/providers/ai-sdk-providers/openai)                             | `gpt-5-chat-latest`                         | <Check size={18} /> | <Check size={18} /> | <Check size={18} /> | <Check size={18} /> |
| [Anthropic](/providers/ai-sdk-providers/anthropic)                       | `claude-opus-4-5`                           | <Check size={18} /> | <Check size={18} /> | <Check size={18} /> | <Check size={18} /> |
| [Anthropic](/providers/ai-sdk-providers/anthropic)                       | `claude-opus-4-1`                           | <Check size={18} /> | <Check size={18} /> | <Check size={18} /> | <Check size={18} /> |
| [Anthropic](/providers/ai-sdk-providers/anthropic)                       | `claude-opus-4-0`                           | <Check size={18} /> | <Check size={18} /> | <Check size={18} /> | <Check size={18} /> |
| [Anthropic](/providers/ai-sdk-providers/anthropic)                       | `claude-sonnet-4-0`                         | <Check size={18} /> | <Check size={18} /> | <Check size={18} /> | <Check size={18} /> |
| [Anthropic](/providers/ai-sdk-providers/anthropic)                       | `claude-3-7-sonnet-latest`                  | <Check size={18} /> | <Check size={18} /> | <Check size={18} /> | <Check size={18} /> |
| [Anthropic](/providers/ai-sdk-providers/anthropic)                       | `claude-3-5-haiku-latest`                   | <Check size={18} /> | <Check size={18} /> | <Check size={18} /> | <Check size={18} /> |
| [Mistral](/providers/ai-sdk-providers/mistral)                           | `pixtral-large-latest`                      | <Check size={18} /> | <Check size={18} /> | <Check size={18} /> | <Check size={18} /> |
| [Mistral](/providers/ai-sdk-providers/mistral)                           | `mistral-large-latest`                      | <Cross size={18} /> | <Check size={18} /> | <Check size={18} /> | <Check size={18} /> |
| [Mistral](/providers/ai-sdk-providers/mistral)                           | `mistral-medium-latest`                     | <Cross size={18} /> | <Check size={18} /> | <Check size={18} /> | <Check size={18} /> |
| [Mistral](/providers/ai-sdk-providers/mistral)                           | `mistral-medium-2505`                       | <Cross size={18} /> | <Check size={18} /> | <Check size={18} /> | <Check size={18} /> |
| [Mistral](/providers/ai-sdk-providers/mistral)                           | `mistral-small-latest`                      | <Cross size={18} /> | <Check size={18} /> | <Check size={18} /> | <Check size={18} /> |
| [Mistral](/providers/ai-sdk-providers/mistral)                           | `pixtral-12b-2409`                          | <Check size={18} /> | <Check size={18} /> | <Check size={18} /> | <Check size={18} /> |
| [Google Generative AI](/providers/ai-sdk-providers/google-generative-ai) | `gemini-2.0-flash-exp`                      | <Check size={18} /> | <Check size={18} /> | <Check size={18} /> | <Check size={18} /> |
| [Google Generative AI](/providers/ai-sdk-providers/google-generative-ai) | `gemini-1.5-flash`                          | <Check size={18} /> | <Check size={18} /> | <Check size={18} /> | <Check size={18} /> |
| [Google Generative AI](/providers/ai-sdk-providers/google-generative-ai) | `gemini-1.5-pro`                            | <Check size={18} /> | <Check size={18} /> | <Check size={18} /> | <Check size={18} /> |
| [Google Vertex](/providers/ai-sdk-providers/google-vertex)               | `gemini-2.0-flash-exp`                      | <Check size={18} /> | <Check size={18} /> | <Check size={18} /> | <Check size={18} /> |
| [Google Vertex](/providers/ai-sdk-providers/google-vertex)               | `gemini-1.5-flash`                          | <Check size={18} /> | <Check size={18} /> | <Check size={18} /> | <Check size={18} /> |
| [Google Vertex](/providers/ai-sdk-providers/google-vertex)               | `gemini-1.5-pro`                            | <Check size={18} /> | <Check size={18} /> | <Check size={18} /> | <Check size={18} /> |
| [DeepSeek](/providers/ai-sdk-providers/deepseek)                         | `deepseek-chat`                             | <Cross size={18} /> | <Check size={18} /> | <Check size={18} /> | <Check size={18} /> |
| [DeepSeek](/providers/ai-sdk-providers/deepseek)                         | `deepseek-reasoner`                         | <Cross size={18} /> | <Check size={18} /> | <Check size={18} /> | <Check size={18} /> |
| [Cerebras](/providers/ai-sdk-providers/cerebras)                         | `llama3.1-8b`                               | <Cross size={18} /> | <Check size={18} /> | <Check size={18} /> | <Check size={18} /> |
| [Cerebras](/providers/ai-sdk-providers/cerebras)                         | `llama3.1-70b`                              | <Cross size={18} /> | <Check size={18} /> | <Check size={18} /> | <Check size={18} /> |
| [Cerebras](/providers/ai-sdk-providers/cerebras)                         | `llama3.3-70b`                              | <Cross size={18} /> | <Check size={18} /> | <Check size={18} /> | <Check size={18} /> |
| [Groq](/providers/ai-sdk-providers/groq)                                 | `meta-llama/llama-4-scout-17b-16e-instruct` | <Check size={18} /> | <Check size={18} /> | <Check size={18} /> | <Check size={18} /> |
| [Groq](/providers/ai-sdk-providers/groq)                                 | `llama-3.3-70b-versatile`                   | <Cross size={18} /> | <Check size={18} /> | <Check size={18} /> | <Check size={18} /> |
| [Groq](/providers/ai-sdk-providers/groq)                                 | `llama-3.1-8b-instant`                      | <Cross size={18} /> | <Check size={18} /> | <Check size={18} /> | <Check size={18} /> |
| [Groq](/providers/ai-sdk-providers/groq)                                 | `mixtral-8x7b-32768`                        | <Cross size={18} /> | <Check size={18} /> | <Check size={18} /> | <Check size={18} /> |
| [Groq](/providers/ai-sdk-providers/groq)                                 | `gemma2-9b-it`                              | <Cross size={18} /> | <Check size={18} /> | <Check size={18} /> | <Check size={18} /> |

<Note>
  This table is not exhaustive. Additional models can be found in the provider
  documentation pages and on the provider websites.
</Note>

# Prompts

Prompts are instructions that you give a [large language model (LLM)](/docs/foundations/overview#large-language-models) to tell it what to do.
It's like when you ask someone for directions; the clearer your question, the better the directions you'll get.

Many LLM providers offer complex interfaces for specifying prompts. They involve different roles and message types.
While these interfaces are powerful, they can be hard to use and understand.

In order to simplify prompting, the AI SDK supports text, message, and system prompts.

## Text Prompts

Text prompts are strings.
They are ideal for simple generation use cases,
e.g. repeatedly generating content for variants of the same prompt text.

You can set text prompts using the `prompt` property made available by AI SDK functions like [`streamText`](/docs/reference/ai-sdk-core/stream-text) or [`generateObject`](/docs/reference/ai-sdk-core/generate-object).
You can structure the text in any way and inject variables, e.g. using a template literal.

```ts highlight="3"
const result = await generateText({
  model: __MODEL__,
  prompt: "Invent a new holiday and describe its traditions.",
});
```

You can also use template literals to provide dynamic data to your prompt.

```ts highlight="3-5"
const result = await generateText({
  model: __MODEL__,
  prompt:
    `I am planning a trip to ${destination} for ${lengthOfStay} days. ` +
    `Please suggest the best tourist activities for me to do.`,
});
```

## System Prompts

System prompts are the initial set of instructions given to models that help guide and constrain the models' behaviors and responses.
You can set system prompts using the `system` property.
System prompts work with both the `prompt` and the `messages` properties.

```ts highlight="3-6"
const result = await generateText({
  model: __MODEL__,
  system:
    `You help planning travel itineraries. ` +
    `Respond to the users' request with a list ` +
    `of the best stops to make in their destination.`,
  prompt:
    `I am planning a trip to ${destination} for ${lengthOfStay} days. ` +
    `Please suggest the best tourist activities for me to do.`,
});
```

<Note>
  When you use a message prompt, you can also use system messages instead of a
  system prompt.
</Note>

## Message Prompts

A message prompt is an array of user, assistant, and tool messages.
They are great for chat interfaces and more complex, multi-modal prompts.
You can use the `messages` property to set message prompts.

Each message has a `role` and a `content` property. The content can either be text (for user and assistant messages), or an array of relevant parts (data) for that message type.

```ts highlight="3-7"
const result = await generateText({
  model: __MODEL__,
  messages: [
    { role: "user", content: "Hi!" },
    { role: "assistant", content: "Hello, how can I help?" },
    { role: "user", content: "Where can I buy the best Currywurst in Berlin?" },
  ],
});
```

Instead of sending a text in the `content` property, you can send an array of parts that includes a mix of text and other content parts.

<Note type="warning">
  Not all language models support all message and content types. For example,
  some models might not be capable of handling multi-modal inputs or tool
  messages. [Learn more about the capabilities of select
  models](./providers-and-models#model-capabilities).
</Note>

### Provider Options

You can pass through additional provider-specific metadata to enable provider-specific functionality at 3 levels.

#### Function Call Level

Functions like [`streamText`](/docs/reference/ai-sdk-core/stream-text#provider-options) or [`generateText`](/docs/reference/ai-sdk-core/generate-text#provider-options) accept a `providerOptions` property.

Adding provider options at the function call level should be used when you do not need granular control over where the provider options are applied.

```ts
const { text } = await generateText({
  model: azure("your-deployment-name"),
  providerOptions: {
    openai: {
      reasoningEffort: "low",
    },
  },
});
```

#### Message Level

For granular control over applying provider options at the message level, you can pass `providerOptions` to the message object:

```ts
import { ModelMessage } from "ai";

const messages: ModelMessage[] = [
  {
    role: "system",
    content: "Cached system message",
    providerOptions: {
      // Sets a cache control breakpoint on the system message
      anthropic: { cacheControl: { type: "ephemeral" } },
    },
  },
];
```

#### Message Part Level

Certain provider-specific options require configuration at the message part level:

```ts
import { ModelMessage } from "ai";

const messages: ModelMessage[] = [
  {
    role: "user",
    content: [
      {
        type: "text",
        text: "Describe the image in detail.",
        providerOptions: {
          openai: { imageDetail: "low" },
        },
      },
      {
        type: "image",
        image:
          "https://github.com/vercel/ai/blob/main/examples/ai-core/data/comic-cat.png?raw=true",
        // Sets image detail configuration for image part:
        providerOptions: {
          openai: { imageDetail: "low" },
        },
      },
    ],
  },
];
```

<Note type="warning">
  AI SDK UI hooks like [`useChat`](/docs/reference/ai-sdk-ui/use-chat) return
  arrays of `UIMessage` objects, which do not support provider options. We
  recommend using the
  [`convertToModelMessages`](/docs/reference/ai-sdk-ui/convert-to-core-messages)
  function to convert `UIMessage` objects to
  [`ModelMessage`](/docs/reference/ai-sdk-core/model-message) objects before
  applying or appending message(s) or message parts with `providerOptions`.
</Note>

### User Messages

#### Text Parts

Text content is the most common type of content. It is a string that is passed to the model.

If you only need to send text content in a message, the `content` property can be a string,
but you can also use it to send multiple content parts.

```ts highlight="7-10"
const result = await generateText({
  model: __MODEL__,
  messages: [
    {
      role: "user",
      content: [
        {
          type: "text",
          text: "Where can I buy the best Currywurst in Berlin?",
        },
      ],
    },
  ],
});
```

#### Image Parts

User messages can include image parts. An image can be one of the following:

- base64-encoded image:
  - `string` with base-64 encoded content
  - data URL `string`, e.g. `data:image/png;base64,...`
- binary image:
  - `ArrayBuffer`
  - `Uint8Array`
  - `Buffer`
- URL:
  - http(s) URL `string`, e.g. `https://example.com/image.png`
  - `URL` object, e.g. `new URL('https://example.com/image.png')`

##### Example: Binary image (Buffer)

```ts highlight="8-11"
const result = await generateText({
  model,
  messages: [
    {
      role: "user",
      content: [
        { type: "text", text: "Describe the image in detail." },
        {
          type: "image",
          image: fs.readFileSync("./data/comic-cat.png"),
        },
      ],
    },
  ],
});
```

##### Example: Base-64 encoded image (string)

```ts highlight="8-11"
const result = await generateText({
  model: __MODEL__,
  messages: [
    {
      role: "user",
      content: [
        { type: "text", text: "Describe the image in detail." },
        {
          type: "image",
          image: fs.readFileSync("./data/comic-cat.png").toString("base64"),
        },
      ],
    },
  ],
});
```

##### Example: Image URL (string)

```ts highlight="8-12"
const result = await generateText({
  model: __MODEL__,
  messages: [
    {
      role: "user",
      content: [
        { type: "text", text: "Describe the image in detail." },
        {
          type: "image",
          image:
            "https://github.com/vercel/ai/blob/main/examples/ai-core/data/comic-cat.png?raw=true",
        },
      ],
    },
  ],
});
```

#### File Parts

<Note type="warning">
  Only a few providers and models currently support file parts: [Google
  Generative AI](/providers/ai-sdk-providers/google-generative-ai), [Google
  Vertex AI](/providers/ai-sdk-providers/google-vertex),
  [OpenAI](/providers/ai-sdk-providers/openai) (for `wav` and `mp3` audio with
  `gpt-4o-audio-preview`), [Anthropic](/providers/ai-sdk-providers/anthropic),
  [OpenAI](/providers/ai-sdk-providers/openai) (for `pdf`).
</Note>

User messages can include file parts. A file can be one of the following:

- base64-encoded file:
  - `string` with base-64 encoded content
  - data URL `string`, e.g. `data:image/png;base64,...`
- binary data:
  - `ArrayBuffer`
  - `Uint8Array`
  - `Buffer`
- URL:
  - http(s) URL `string`, e.g. `https://example.com/some.pdf`
  - `URL` object, e.g. `new URL('https://example.com/some.pdf')`

You need to specify the MIME type of the file you are sending.

##### Example: PDF file from Buffer

```ts highlight="12-15"
import { google } from "@ai-sdk/google";
import { generateText } from "ai";

const result = await generateText({
  model: google("gemini-1.5-flash"),
  messages: [
    {
      role: "user",
      content: [
        { type: "text", text: "What is the file about?" },
        {
          type: "file",
          mediaType: "application/pdf",
          data: fs.readFileSync("./data/example.pdf"),
          filename: "example.pdf", // optional, not used by all providers
        },
      ],
    },
  ],
});
```

##### Example: mp3 audio file from Buffer

```ts highlight="12-14"
import { openai } from "@ai-sdk/openai";
import { generateText } from "ai";

const result = await generateText({
  model: openai("gpt-4o-audio-preview"),
  messages: [
    {
      role: "user",
      content: [
        { type: "text", text: "What is the audio saying?" },
        {
          type: "file",
          mediaType: "audio/mpeg",
          data: fs.readFileSync("./data/galileo.mp3"),
        },
      ],
    },
  ],
});
```

#### Custom Download Function (Experimental)

You can use custom download functions to implement throttling, retries, authentication, caching, and more.

The default download implementation automatically downloads files in parallel when they are not supported by the model.

Custom download function can be passed via the `experimental_download` property:

```ts
const result = await generateText({
  model: __MODEL__,
  experimental_download: async (
    requestedDownloads: Array<{
      url: URL;
      isUrlSupportedByModel: boolean;
    }>,
  ): PromiseLike<
    Array<{
      data: Uint8Array;
      mediaType: string | undefined;
    } | null>
  > => {
    // ... download the files and return an array with similar order
  },
  messages: [
    {
      role: "user",
      content: [
        {
          type: "file",
          data: new URL("https://api.company.com/private/document.pdf"),
          mediaType: "application/pdf",
        },
      ],
    },
  ],
});
```

<Note>
  The `experimental_download` option is experimental and may change in future
  releases.
</Note>

### Assistant Messages

Assistant messages are messages that have a role of `assistant`.
They are typically previous responses from the assistant
and can contain text, reasoning, and tool call parts.

#### Example: Assistant message with text content

```ts highlight="5"
const result = await generateText({
  model: __MODEL__,
  messages: [
    { role: "user", content: "Hi!" },
    { role: "assistant", content: "Hello, how can I help?" },
  ],
});
```

#### Example: Assistant message with text content in array

```ts highlight="7"
const result = await generateText({
  model: __MODEL__,
  messages: [
    { role: "user", content: "Hi!" },
    {
      role: "assistant",
      content: [{ type: "text", text: "Hello, how can I help?" }],
    },
  ],
});
```

#### Example: Assistant message with tool call content

```ts highlight="7-14"
const result = await generateText({
  model: __MODEL__,
  messages: [
    { role: "user", content: "How many calories are in this block of cheese?" },
    {
      role: "assistant",
      content: [
        {
          type: "tool-call",
          toolCallId: "12345",
          toolName: "get-nutrition-data",
          input: { cheese: "Roquefort" },
        },
      ],
    },
  ],
});
```

#### Example: Assistant message with file content

<Note>
  This content part is for model-generated files. Only a few models support
  this, and only for file types that they can generate.
</Note>

```ts highlight="9-11"
const result = await generateText({
  model: __MODEL__,
  messages: [
    { role: "user", content: "Generate an image of a roquefort cheese!" },
    {
      role: "assistant",
      content: [
        {
          type: "file",
          mediaType: "image/png",
          data: fs.readFileSync("./data/roquefort.jpg"),
        },
      ],
    },
  ],
});
```

### Tool messages

<Note>
  [Tools](/docs/foundations/tools) (also known as function calling) are programs
  that you can provide an LLM to extend its built-in functionality. This can be
  anything from calling an external API to calling functions within your UI.
  Learn more about Tools in [the next section](/docs/foundations/tools).
</Note>

For models that support [tool](/docs/foundations/tools) calls, assistant messages can contain tool call parts, and tool messages can contain tool output parts.
A single assistant message can call multiple tools, and a single tool message can contain multiple tool results.

```ts highlight="14-42"
const result = await generateText({
  model: __MODEL__,
  messages: [
    {
      role: "user",
      content: [
        {
          type: "text",
          text: "How many calories are in this block of cheese?",
        },
        { type: "image", image: fs.readFileSync("./data/roquefort.jpg") },
      ],
    },
    {
      role: "assistant",
      content: [
        {
          type: "tool-call",
          toolCallId: "12345",
          toolName: "get-nutrition-data",
          input: { cheese: "Roquefort" },
        },
        // there could be more tool calls here (parallel calling)
      ],
    },
    {
      role: "tool",
      content: [
        {
          type: "tool-result",
          toolCallId: "12345", // needs to match the tool call id
          toolName: "get-nutrition-data",
          output: {
            type: "json",
            value: {
              name: "Cheese, roquefort",
              calories: 369,
              fat: 31,
              protein: 22,
            },
          },
        },
        // there could be more tool results here (parallel calling)
      ],
    },
  ],
});
```

#### Multi-modal Tool Results

<Note type="warning">
  Multi-part tool results are experimental and only supported by Anthropic.
</Note>

Tool results can be multi-part and multi-modal, e.g. a text and an image.
You can use the `experimental_content` property on tool parts to specify multi-part tool results.

```ts highlight="24-46"
const result = await generateText({
  model: __MODEL__,
  messages: [
    // ...
    {
      role: "tool",
      content: [
        {
          type: "tool-result",
          toolCallId: "12345", // needs to match the tool call id
          toolName: "get-nutrition-data",
          // for models that do not support multi-part tool results,
          // you can include a regular output part:
          output: {
            type: "json",
            value: {
              name: "Cheese, roquefort",
              calories: 369,
              fat: 31,
              protein: 22,
            },
          },
        },
        {
          type: "tool-result",
          toolCallId: "12345", // needs to match the tool call id
          toolName: "get-nutrition-data",
          // for models that support multi-part tool results,
          // you can include a multi-part content part:
          output: {
            type: "content",
            value: [
              {
                type: "text",
                text: "Here is an image of the nutrition data for the cheese:",
              },
              {
                type: "media",
                data: fs
                  .readFileSync("./data/roquefort-nutrition-data.png")
                  .toString("base64"),
                mediaType: "image/png",
              },
            ],
          },
        },
      ],
    },
  ],
});
```

### System Messages

System messages are messages that are sent to the model before the user messages to guide the assistant's behavior.
You can alternatively use the `system` property.

```ts highlight="4"
const result = await generateText({
  model: __MODEL__,
  messages: [
    { role: "system", content: "You help planning travel itineraries." },
    {
      role: "user",
      content:
        "I am planning a trip to Berlin for 3 days. Please suggest the best tourist activities for me to do.",
    },
  ],
});
```

# Tools

While [large language models (LLMs)](/docs/foundations/overview#large-language-models) have incredible generation capabilities,
they struggle with discrete tasks (e.g. mathematics) and interacting with the outside world (e.g. getting the weather).

Tools are actions that an LLM can invoke.
The results of these actions can be reported back to the LLM to be considered in the next response.

For example, when you ask an LLM for the "weather in London", and there is a weather tool available, it could call a tool
with London as the argument. The tool would then fetch the weather data and return it to the LLM. The LLM can then use this
information in its response.

## What is a tool?

A tool is an object that can be called by the model to perform a specific task.
You can use tools with [`generateText`](/docs/reference/ai-sdk-core/generate-text)
and [`streamText`](/docs/reference/ai-sdk-core/stream-text) by passing one or more tools to the `tools` parameter.

A tool consists of three properties:

- **`description`**: An optional description of the tool that can influence when the tool is picked.
- **`inputSchema`**: A [Zod schema](/docs/foundations/tools#schema-specification-and-validation-with-zod) or a [JSON schema](/docs/reference/ai-sdk-core/json-schema) that defines the input required for the tool to run. The schema is consumed by the LLM, and also used to validate the LLM tool calls.
- **`execute`**: An optional async function that is called with the arguments from the tool call.

<Note>
  `streamUI` uses UI generator tools with a `generate` function that can return
  React components.
</Note>

If the LLM decides to use a tool, it will generate a tool call.
Tools with an `execute` function are run automatically when these calls are generated.
The output of the tool calls are returned using tool result objects.

You can automatically pass tool results back to the LLM
using [multi-step calls](/docs/ai-sdk-core/tools-and-tool-calling#multi-step-calls) with `streamText` and `generateText`.

## Schemas

Schemas are used to define and validate the [tool input](/docs/ai-sdk-core/tools-and-tool-calling), tools outputs, and structured output generation.

The AI SDK supports the following schemas:

- [Zod](https://zod.dev/) v3 and v4 directly or via [`zodSchema()`](/docs/reference/ai-sdk-core/zod-schema)
- [Valibot](https://valibot.dev/) via [`valibotSchema()`](/docs/reference/ai-sdk-core/valibot-schema) from `@ai-sdk/valibot`
- [Standard JSON Schema](https://standardschema.dev/json-schema) compatible schemas
- Raw JSON schemas via [`jsonSchema()`](/docs/reference/ai-sdk-core/json-schema)

<Note>
  You can also use schemas for structured output generation with
  [`generateText`](/docs/reference/ai-sdk-core/generate-text) and
  [`streamText`](/docs/reference/ai-sdk-core/stream-text) using the `output`
  setting.
</Note>

## Tool Packages

Given tools are JavaScript objects, they can be packaged and distributed through npm like any other library. This makes it easy to share reusable tools across projects and with the community.

### Using Ready-Made Tool Packages

Install a tool package and import the tools you need:

```bash
pnpm add some-tool-package
```

Then pass them directly to `generateText`, `streamText`, or your agent definition:

```ts highlight="2, 8"
import { generateText, stepCountIs } from "ai";
import { searchTool } from "some-tool-package";

const { text } = await generateText({
  model: "anthropic/claude-haiku-4.5",
  prompt: "When was Vercel Ship AI?",
  tools: {
    webSearch: searchTool,
  },
  stopWhen: stepCountIs(10),
});
```

### Publishing Your Own Tools

You can publish your own tool packages to npm for others to use. Simply export your tool objects from your package:

```ts
// my-tools/index.ts
export const myTool = {
  description: "A helpful tool",
  inputSchema: z.object({
    query: z.string(),
  }),
  execute: async ({ query }) => {
    // your tool logic
    return result;
  },
};
```

Anyone can then install and use your tools by importing them.

To get started, you can use the [AI SDK Tool Package Template](https://github.com/vercel-labs/ai-sdk-tool-as-package-template) which provides a ready-to-use starting point for publishing your own tools.

## Toolsets

When you work with tools, you typically need a mix of application-specific tools and general-purpose tools. The community has created various toolsets and resources to help you build and use tools.

### Ready-to-Use Tool Packages

These packages provide pre-built tools you can install and use immediately:

- **[@exalabs/ai-sdk](https://www.npmjs.com/package/@exalabs/ai-sdk)** - Web search tool that lets AI search the web and get real-time information.
- **[@parallel-web/ai-sdk-tools](https://www.npmjs.com/package/@parallel-web/ai-sdk-tools)** - Web search and extract tools powered by Parallel Web API for real-time information and content extraction.
- **[@perplexity-ai/ai-sdk](https://www.npmjs.com/package/@perplexity-ai/ai-sdk)** - Search the web with real-time results and advanced filtering powered by Perplexity's Search API.
- **[@tavily/ai-sdk](https://www.npmjs.com/package/@tavily/ai-sdk)** - Search, extract, crawl, and map tools for enterprise-grade agents to explore the web in real-time.
- **[Stripe agent tools](https://docs.stripe.com/agents?framework=vercel)** - Tools for interacting with Stripe.
- **[StackOne ToolSet](https://docs.stackone.com/agents/typescript/frameworks/vercel-ai-sdk)** - Agentic integrations for hundreds of [enterprise SaaS](https://www.stackone.com/integrations) platforms.
- **[agentic](https://docs.agentic.so/marketplace/ts-sdks/ai-sdk)** - A collection of 20+ tools that connect to external APIs such as [Exa](https://exa.ai/) or [E2B](https://e2b.dev/).
- **[Amazon Bedrock AgentCore](https://github.com/aws/bedrock-agentcore-sdk-typescript)** - Fully managed AI agent services including [**Browser**](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/built-in-tools.html) (a fast and secure cloud-based browser runtime to enable agents to interact with web applications, fill forms, navigate websites, and extract information) and [**Code Interpreter**](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/built-in-tools.html) (an isolated sandbox environment for agents to execute code in Python, JavaScript, and TypeScript, enhancing accuracy and expanding ability to solve complex end-to-end tasks).
- **[@airweave/vercel-ai-sdk](https://www.npmjs.com/package/@airweave/vercel-ai-sdk)** - Unified semantic search across 35+ data sources (Notion, Slack, Google Drive, databases, and more) for AI agents.
- **[Composio](https://docs.composio.dev/providers/vercel)** - 250+ tools like GitHub, Gmail, Salesforce and [more](https://composio.dev/tools).
- **[JigsawStack](http://www.jigsawstack.com/docs/integration/vercel)** - Over 30+ small custom fine-tuned models available for specific uses.
- **[AI Tools Registry](https://ai-tools-registry.vercel.app)** - A Shadcn-compatible tool definitions and components registry for the AI SDK.
- **[Toolhouse](https://docs.toolhouse.ai/toolhouse/toolhouse-sdk/using-vercel-ai)** - AI function-calling in 3 lines of code for over 25 different actions.

### MCP Tools

These are pre-built tools available as MCP servers:

- **[Smithery](https://smithery.ai/docs/integrations/vercel_ai_sdk)** - An open marketplace of 6,000+ MCPs, including [Browserbase](https://browserbase.com/) and [Exa](https://exa.ai/).
- **[Pipedream](https://pipedream.com/docs/connect/mcp/ai-frameworks/vercel-ai-sdk)** - Developer toolkit that lets you easily add 3,000+ integrations to your app or AI agent.
- **[Apify](https://docs.apify.com/platform/integrations/vercel-ai-sdk)** - Apify provides a [marketplace](https://apify.com/store) of thousands of tools for web scraping, data extraction, and browser automation.

### Tool Building Tutorials

These tutorials and guides help you build your own tools that integrate with specific services:

- **[browserbase](https://docs.browserbase.com/integrations/vercel/introduction#vercel-ai-integration)** - Tutorial for building browser tools that run a headless browser.
- **[browserless](https://docs.browserless.io/ai-integrations/vercel-ai-sdk)** - Guide for integrating browser automation (self-hosted or cloud-based).
- **[AI Tool Maker](https://github.com/nihaocami/ai-tool-maker)** - A CLI utility to generate AI SDK tools from OpenAPI specs.
- **[Interlify](https://www.interlify.com/docs/integrate-with-vercel-ai)** - Guide for converting APIs into tools.
- **[DeepAgent](https://deepagent.amardeep.space/docs/vercel-ai-sdk)** - A suite of 50+ AI tools and integrations, seamlessly connecting with APIs like Tavily, E2B, Airtable and [more](https://deepagent.amardeep.space/docs).

<Note>
  Do you have open source tools or tool libraries that are compatible with the
  AI SDK? Please [file a pull request](https://github.com/vercel/ai/pulls) to
  add them to this list.
</Note>

## Learn more

The AI SDK Core [Tool Calling](/docs/ai-sdk-core/tools-and-tool-calling)
and [Agents](/docs/foundations/agents) documentation has more information about tools and tool calling.

# LevelUp AI — Implementation Summary

Client (`src/components/quiz/ai-panel.tsx`):

```tsx
const { messages, sendMessage } = useChat({
  id: `ai-explain-${question.id}-${aiChatKey}`,
  transport: new DefaultChatTransport({
    api: "/api/ai/explain",
    body: {
      questionContext: question,
      locale, // user's current locale from next-intl
    },
  }),
});
```

Server (`src/app/api/ai/explain/route.ts`):

```ts
export async function POST(req: Request) {
  const { messages, questionContext, locale } = await req.json();

  const systemPrompt = `You are a helpful tutor...\nIMPORTANT: Always respond in the user's language. The user is currently using ${locale || "English"} language.`;

  const result = streamText({
    model: google("gemini-2.5-flash"),
    system: systemPrompt,
    messages: await convertToModelMessages(messages),
    maxRetries: 0,
  });

  return result.toUIMessageStreamResponse();
}
```

Environment:

- `AI_GATEWAY_API_KEY` or provider-specific key
- `DATABASE_URL`, `BETTER_AUTH_SECRET`, `BETTER_AUTH_URL`

Notes:

- The locale comes from `next-intl` via `useLocale()` in the client.
- The server enforces language via the system prompt.

In this quickstart tutorial, you'll build a simple agent with a streaming chat user interface. Along the way, you'll learn key concepts and techniques that are fundamental to using the AI SDK in your own projects.

If you are unfamiliar with the concepts of [Prompt Engineering](/docs/advanced/prompt-engineering) and [HTTP Streaming](/docs/advanced/why-streaming), you can optionally read these documents first.

## Prerequisites

To follow this quickstart, you'll need:

- Node.js 18+ and pnpm installed on your local development machine.
- A [ Vercel AI Gateway ](https://vercel.com/ai-gateway) API key.

If you haven't obtained your Vercel AI Gateway API key, you can do so by [signing up](https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fai&title=Go+to+AI+Gateway) on the Vercel website.

## Create Your Application

Start by creating a new Next.js application. This command will create a new directory named `my-ai-app` and set up a basic Next.js application inside it.

<div className="mb-4">
  <Note>
    Be sure to select yes when prompted to use the App Router and Tailwind CSS.
    If you are looking for the Next.js Pages Router quickstart guide, you can
    find it [here](/docs/getting-started/nextjs-pages-router).
  </Note>
</div>

<Snippet text="pnpm create next-app@latest my-ai-app" />

Navigate to the newly created directory:

<Snippet text="cd my-ai-app" />

### Install dependencies

Install `ai` and `@ai-sdk/react`, the AI package and AI SDK's React hooks. The AI SDK's [ Vercel AI Gateway provider ](/providers/ai-sdk-providers/ai-gateway) ships with the `ai` package. You'll also install `zod`, a schema validation library used for defining tool inputs.

<Note>
  This guide uses the Vercel AI Gateway provider so you can access hundreds of
  models from different providers with one API key, but you can switch to any
  provider or model by installing its package. Check out available [AI SDK
  providers](/providers/ai-sdk-providers) for more information.
</Note>

<div className="my-4">
  <Tabs items={['pnpm', 'npm', 'yarn', 'bun']}>
    <Tab>
      <Snippet text="pnpm add ai @ai-sdk/react zod" dark />
    </Tab>
    <Tab>
      <Snippet text="npm install ai @ai-sdk/react zod" dark />
    </Tab>
    <Tab>
      <Snippet text="yarn add ai @ai-sdk/react zod" dark />
    </Tab>

    <Tab>
      <Snippet text="bun add ai @ai-sdk/react zod" dark />
    </Tab>

  </Tabs>
</div>

### Configure your AI Gateway API key

Create a `.env.local` file in your project root and add your AI Gateway API key. This key authenticates your application with Vercel AI Gateway.

<Snippet text="touch .env.local" />

Edit the `.env.local` file:

```env filename=".env.local"
AI_GATEWAY_API_KEY=xxxxxxxxx
```

Replace `xxxxxxxxx` with your actual Vercel AI Gateway API key.

<Note className="mb-4">
  The AI SDK's Vercel AI Gateway Provider will default to using the
  `AI_GATEWAY_API_KEY` environment variable.
</Note>

## Create a Route Handler

Create a route handler, `app/api/chat/route.ts` and add the following code:

```tsx filename="app/api/chat/route.ts"
import { streamText, UIMessage, convertToModelMessages } from "ai";
__PROVIDER_IMPORT__;

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const result = streamText({
    model: __MODEL__,
    messages: await convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse();
}
```

Let's take a look at what is happening in this code:

1. Define an asynchronous `POST` request handler and extract `messages` from the body of the request. The `messages` variable contains a history of the conversation between you and the chatbot and provides the chatbot with the necessary context to make the next generation. The `messages` are of UIMessage type, which are designed for use in application UI - they contain the entire message history and associated metadata like timestamps.
2. Call [`streamText`](/docs/reference/ai-sdk-core/stream-text), which is imported from the `ai` package. This function accepts a configuration object that contains a `model` provider and `messages` (defined in step 1). You can pass additional [settings](/docs/ai-sdk-core/settings) to further customise the model's behaviour. The `messages` key expects a `ModelMessage[]` array. This type is different from `UIMessage` in that it does not include metadata, such as timestamps or sender information. To convert between these types, we use the `convertToModelMessages` function, which strips the UI-specific metadata and transforms the `UIMessage[]` array into the `ModelMessage[]` format that the model expects.
3. The `streamText` function returns a [`StreamTextResult`](/docs/reference/ai-sdk-core/stream-text#result-object). This result object contains the [ `toUIMessageStreamResponse` ](/docs/reference/ai-sdk-core/stream-text#to-data-stream-response) function which converts the result to a streamed response object.
4. Finally, return the result to the client to stream the response.

This Route Handler creates a POST request endpoint at `/api/chat`.

## Choosing a Provider

The AI SDK supports dozens of model providers through [first-party](/providers/ai-sdk-providers), [OpenAI-compatible](/providers/openai-compatible-providers), and [ community ](/providers/community-providers) packages.

This quickstart uses the [Vercel AI Gateway](https://vercel.com/ai-gateway) provider, which is the default [global provider](/docs/ai-sdk-core/provider-management#global-provider-configuration). This means you can access models using a simple string in the model configuration:

```ts
model: __MODEL__;
```

You can also explicitly import and use the gateway provider in two other equivalent ways:

```ts
// Option 1: Import from 'ai' package (included by default)
import { gateway } from "ai";
model: gateway("anthropic/claude-sonnet-4.5");

// Option 2: Install and import from '@ai-sdk/gateway' package
import { gateway } from "@ai-sdk/gateway";
model: gateway("anthropic/claude-sonnet-4.5");
```

### Using other providers

To use a different provider, install its package and create a provider instance. For example, to use OpenAI directly:

<div className="my-4">
  <Tabs items={['pnpm', 'npm', 'yarn', 'bun']}>
    <Tab>
      <Snippet text="pnpm add @ai-sdk/openai" dark />
    </Tab>
    <Tab>
      <Snippet text="npm install @ai-sdk/openai" dark />
    </Tab>
    <Tab>
      <Snippet text="yarn add @ai-sdk/openai" dark />
    </Tab>

    <Tab>
      <Snippet text="bun add @ai-sdk/openai" dark />
    </Tab>

  </Tabs>
</div>

```ts
import { openai } from "@ai-sdk/openai";

model: openai("gpt-5.1");
```

#### Updating the global provider

You can change the default global provider so string model references use your preferred provider everywhere in your application. Learn more about [provider management](/docs/ai-sdk-core/provider-management#global-provider-configuration).

Pick the approach that best matches how you want to manage providers across your application.

## Wire up the UI

Now that you have a Route Handler that can query an LLM, it's time to setup your frontend. The AI SDK's [ UI ](/docs/ai-sdk-ui) package abstracts the complexity of a chat interface into one hook, [`useChat`](/docs/reference/ai-sdk-ui/use-chat).

Update your root page (`app/page.tsx`) with the following code to show a list of chat messages and provide a user message input:

```tsx filename="app/page.tsx"
"use client";

import { useChat } from "@ai-sdk/react";
import { useState } from "react";

export default function Chat() {
  const [input, setInput] = useState("");
  const { messages, sendMessage } = useChat();
  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
      {messages.map((message) => (
        <div key={message.id} className="whitespace-pre-wrap">
          {message.role === "user" ? "User: " : "AI: "}
          {message.parts.map((part, i) => {
            switch (part.type) {
              case "text":
                return <div key={`${message.id}-${i}`}>{part.text}</div>;
            }
          })}
        </div>
      ))}

      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendMessage({ text: input });
          setInput("");
        }}
      >
        <input
          className="fixed dark:bg-zinc-900 bottom-0 w-full max-w-md p-2 mb-8 border border-zinc-300 dark:border-zinc-800 rounded shadow-xl"
          value={input}
          placeholder="Say something..."
          onChange={(e) => setInput(e.currentTarget.value)}
        />
      </form>
    </div>
  );
}
```

<Note>
  Make sure you add the `"use client"` directive to the top of your file. This
  allows you to add interactivity with Javascript.
</Note>

This page utilizes the `useChat` hook, which will, by default, use the `POST` API route you created earlier (`/api/chat`). The hook provides functions and state for handling user input and form submission. The `useChat` hook provides multiple utility functions and state variables:

- `messages` - the current chat messages (an array of objects with `id`, `role`, and `parts` properties).
- `sendMessage` - a function to send a message to the chat API.

The component uses local state (`useState`) to manage the input field value, and handles form submission by calling `sendMessage` with the input text and then clearing the input field.

The LLM's response is accessed through the message `parts` array. Each message contains an ordered array of `parts` that represents everything the model generated in its response. These parts can include plain text, reasoning tokens, and more that you will see later. The `parts` array preserves the sequence of the model's outputs, allowing you to display or process each component in the order it was generated.

## Running Your Application

With that, you have built everything you need for your chatbot! To start your application, use the command:

<Snippet text="pnpm run dev" />

Head to your browser and open http://localhost:3000. You should see an input field. Test it out by entering a message and see the AI chatbot respond in real-time! The AI SDK makes it fast and easy to build AI chat interfaces with Next.js.

## Enhance Your Chatbot with Tools

While large language models (LLMs) have incredible generation capabilities, they struggle with discrete tasks (e.g. mathematics) and interacting with the outside world (e.g. getting the weather). This is where [tools](/docs/ai-sdk-core/tools-and-tool-calling) come in.

Tools are actions that an LLM can invoke. The results of these actions can be reported back to the LLM to be considered in the next response.

For example, if a user asks about the current weather, without tools, the model would only be able to provide general information based on its training data. But with a weather tool, it can fetch and provide up-to-date, location-specific weather information.

Let's enhance your chatbot by adding a simple weather tool.

### Update Your Route Handler

Modify your `app/api/chat/route.ts` file to include the new weather tool:

```tsx filename="app/api/chat/route.ts" highlight="2,13-27"
import { streamText, UIMessage, convertToModelMessages, tool } from "ai";
__PROVIDER_IMPORT__;
import { z } from "zod";

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const result = streamText({
    model: __MODEL__,
    messages: await convertToModelMessages(messages),
    tools: {
      weather: tool({
        description: "Get the weather in a location (fahrenheit)",
        inputSchema: z.object({
          location: z.string().describe("The location to get the weather for"),
        }),
        execute: async ({ location }) => {
          const temperature = Math.round(Math.random() * (90 - 32) + 32);
          return {
            location,
            temperature,
          };
        },
      }),
    },
  });

  return result.toUIMessageStreamResponse();
}
```

In this updated code:

1. You import the `tool` function from the `ai` package and `z` from `zod` for schema validation.
2. You define a `tools` object with a `weather` tool. This tool:
   - Has a description that helps the model understand when to use it.
   - Defines `inputSchema` using a Zod schema, specifying that it requires a `location` string to execute this tool. The model will attempt to extract this input from the context of the conversation. If it can't, it will ask the user for the missing information.
   - Defines an `execute` function that simulates getting weather data (in this case, it returns a random temperature). This is an asynchronous function running on the server so you can fetch real data from an external API.

Now your chatbot can "fetch" weather information for any location the user asks about. When the model determines it needs to use the weather tool, it will generate a tool call with the necessary input. The `execute` function will then be automatically run, and the tool output will be added to the `messages` as a `tool` message.

Try asking something like "What's the weather in New York?" and see how the model uses the new tool.

Notice the blank response in the UI? This is because instead of generating a text response, the model generated a tool call. You can access the tool call and subsequent tool result on the client via the `tool-weather` part of the `message.parts` array.

<Note>
  Tool parts are always named `tool-{toolName}`, where `{toolName}` is the key
  you used when defining the tool. In this case, since we defined the tool as
  `weather`, the part type is `tool-weather`.
</Note>

### Update the UI

To display the tool invocation in your UI, update your `app/page.tsx` file:

```tsx filename="app/page.tsx" highlight="16-21"
"use client";

import { useChat } from "@ai-sdk/react";
import { useState } from "react";

export default function Chat() {
  const [input, setInput] = useState("");
  const { messages, sendMessage } = useChat();
  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
      {messages.map((message) => (
        <div key={message.id} className="whitespace-pre-wrap">
          {message.role === "user" ? "User: " : "AI: "}
          {message.parts.map((part, i) => {
            switch (part.type) {
              case "text":
                return <div key={`${message.id}-${i}`}>{part.text}</div>;
              case "tool-weather":
                return (
                  <pre key={`${message.id}-${i}`}>
                    {JSON.stringify(part, null, 2)}
                  </pre>
                );
            }
          })}
        </div>
      ))}

      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendMessage({ text: input });
          setInput("");
        }}
      >
        <input
          className="fixed dark:bg-zinc-900 bottom-0 w-full max-w-md p-2 mb-8 border border-zinc-300 dark:border-zinc-800 rounded shadow-xl"
          value={input}
          placeholder="Say something..."
          onChange={(e) => setInput(e.currentTarget.value)}
        />
      </form>
    </div>
  );
}
```

With this change, you're updating the UI to handle different message parts. For text parts, you display the text content as before. For weather tool invocations, you display a JSON representation of the tool call and its result.

Now, when you ask about the weather, you'll see the tool call and its result displayed in your chat interface.

## Enabling Multi-Step Tool Calls

You may have noticed that while the tool is now visible in the chat interface, the model isn't using this information to answer your original query. This is because once the model generates a tool call, it has technically completed its generation.

To solve this, you can enable multi-step tool calls using `stopWhen`. By default, `stopWhen` is set to `stepCountIs(1)`, which means generation stops after the first step when there are tool results. By changing this condition, you can allow the model to automatically send tool results back to itself to trigger additional generations until your specified stopping condition is met. In this case, you want the model to continue generating so it can use the weather tool results to answer your original question.

### Update Your Route Handler

Modify your `app/api/chat/route.ts` file to include the `stopWhen` condition:

```tsx filename="app/api/chat/route.ts"
import {
  streamText,
  UIMessage,
  convertToModelMessages,
  tool,
  stepCountIs,
} from "ai";
__PROVIDER_IMPORT__;
import { z } from "zod";

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const result = streamText({
    model: __MODEL__,
    messages: await convertToModelMessages(messages),
    stopWhen: stepCountIs(5),
    tools: {
      weather: tool({
        description: "Get the weather in a location (fahrenheit)",
        inputSchema: z.object({
          location: z.string().describe("The location to get the weather for"),
        }),
        execute: async ({ location }) => {
          const temperature = Math.round(Math.random() * (90 - 32) + 32);
          return {
            location,
            temperature,
          };
        },
      }),
    },
  });

  return result.toUIMessageStreamResponse();
}
```

In this updated code:

1. You set `stopWhen` to be when `stepCountIs` 5, allowing the model to use up to 5 "steps" for any given generation.
2. You add an `onStepFinish` callback to log any `toolResults` from each step of the interaction, helping you understand the model's tool usage. This means we can also delete the `toolCall` and `toolResult` `console.log` statements from the previous example.

Head back to the browser and ask about the weather in a location. You should now see the model using the weather tool results to answer your question.

By setting `stopWhen: stepCountIs(5)`, you're allowing the model to use up to 5 "steps" for any given generation. This enables more complex interactions and allows the model to gather and process information over several steps if needed. You can see this in action by adding another tool to convert the temperature from Celsius to Fahrenheit.

### Add another tool

Update your `app/api/chat/route.ts` file to add a new tool to convert the temperature from Fahrenheit to Celsius:

```tsx filename="app/api/chat/route.ts" highlight="34-47"
import {
  streamText,
  UIMessage,
  convertToModelMessages,
  tool,
  stepCountIs,
} from "ai";
__PROVIDER_IMPORT__;
import { z } from "zod";

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const result = streamText({
    model: __MODEL__,
    messages: await convertToModelMessages(messages),
    stopWhen: stepCountIs(5),
    tools: {
      weather: tool({
        description: "Get the weather in a location (fahrenheit)",
        inputSchema: z.object({
          location: z.string().describe("The location to get the weather for"),
        }),
        execute: async ({ location }) => {
          const temperature = Math.round(Math.random() * (90 - 32) + 32);
          return {
            location,
            temperature,
          };
        },
      }),
      convertFahrenheitToCelsius: tool({
        description: "Convert a temperature in fahrenheit to celsius",
        inputSchema: z.object({
          temperature: z
            .number()
            .describe("The temperature in fahrenheit to convert"),
        }),
        execute: async ({ temperature }) => {
          const celsius = Math.round((temperature - 32) * (5 / 9));
          return {
            celsius,
          };
        },
      }),
    },
  });

  return result.toUIMessageStreamResponse();
}
```

### Update Your Frontend

update your `app/page.tsx` file to render the new temperature conversion tool:

```tsx filename="app/page.tsx" highlight="21"
"use client";

import { useChat } from "@ai-sdk/react";
import { useState } from "react";

export default function Chat() {
  const [input, setInput] = useState("");
  const { messages, sendMessage } = useChat();
  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
      {messages.map((message) => (
        <div key={message.id} className="whitespace-pre-wrap">
          {message.role === "user" ? "User: " : "AI: "}
          {message.parts.map((part, i) => {
            switch (part.type) {
              case "text":
                return <div key={`${message.id}-${i}`}>{part.text}</div>;
              case "tool-weather":
              case "tool-convertFahrenheitToCelsius":
                return (
                  <pre key={`${message.id}-${i}`}>
                    {JSON.stringify(part, null, 2)}
                  </pre>
                );
            }
          })}
        </div>
      ))}

      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendMessage({ text: input });
          setInput("");
        }}
      >
        <input
          className="fixed dark:bg-zinc-900 bottom-0 w-full max-w-md p-2 mb-8 border border-zinc-300 dark:border-zinc-800 rounded shadow-xl"
          value={input}
          placeholder="Say something..."
          onChange={(e) => setInput(e.currentTarget.value)}
        />
      </form>
    </div>
  );
}
```

This update handles the new `tool-convertFahrenheitToCelsius` part type, displaying the temperature conversion tool calls and results in the UI.

Now, when you ask "What's the weather in New York in celsius?", you should see a more complete interaction:

1. The model will call the weather tool for New York.
2. You'll see the tool output displayed.
3. It will then call the temperature conversion tool to convert the temperature from Fahrenheit to Celsius.
4. The model will then use that information to provide a natural language response about the weather in New York.

This multi-step approach allows the model to gather information and use it to provide more accurate and contextual responses, making your chatbot considerably more useful.

This simple example demonstrates how tools can expand your model's capabilities. You can create more complex tools to integrate with real APIs, databases, or any other external systems, allowing the model to access and process real-world data in real-time. Tools bridge the gap between the model's knowledge cutoff and current information.

## Where to Next?

You've built an AI chatbot using the AI SDK! From here, you have several paths to explore:

- To learn more about the AI SDK, read through the [documentation](/docs).
- If you're interested in diving deeper with guides, check out the [RAG (retrieval-augmented generation)](/docs/guides/rag-chatbot) and [multi-modal chatbot](/docs/guides/multi-modal-chatbot) guides.
- To jumpstart your first AI project, explore available [templates](https://vercel.com/templates?type=ai).

# Choosing a Provider

The AI SDK supports dozens of model providers through [first-party](/providers/ai-sdk-providers), [OpenAI-compatible](/providers/openai-compatible-providers), and [community](/providers/community-providers) packages.

```ts
import { generateText } from "ai";
__PROVIDER_IMPORT__;

const { text } = await generateText({
  model: __MODEL__,
  prompt: "What is love?",
});
```

## AI Gateway

The [Vercel AI Gateway](/providers/ai-sdk-providers/ai-gateway) is the fastest way to get started with the AI SDK. Access models from OpenAI, Anthropic, Google, and other providers. Authenticate with [OIDC](https://ai-sdk.dev/providers/ai-sdk-providers/ai-gateway#oidc-authentication-vercel-deployments) or an AI Gateway API key

<div className="max-w-[40%] mx-auto">
  <ButtonLink
    href="https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fai%2Fapi-keys%3Futm_source%3Dgateway-models-page%26showCreateKeyModal%3Dtrue&title=Get+Started+with+Vercel+AI+Gateway"
    shape="rounded"
    size="large"
    type="default"
    prefix={<VercelIcon />}
  >
    Get an API Key
  </ButtonLink>
</div>

Add your API key to your environment:

```env filename=".env.local"
AI_GATEWAY_API_KEY=your_api_key_here
```

The AI Gateway is the default [global provider](/docs/ai-sdk-core/provider-management#global-provider-configuration), so you can access models using a simple string:

```ts
import { generateText } from "ai";

const { text } = await generateText({
  model: "anthropic/claude-sonnet-4.5",
  prompt: "What is love?",
});
```

You can also explicitly import and use the gateway provider:

```ts
// Option 1: Import from 'ai' package (included by default)
import { gateway } from "ai";
model: gateway("anthropic/claude-sonnet-4.5");

// Option 2: Install and import from '@ai-sdk/gateway' package
import { gateway } from "@ai-sdk/gateway";
model: gateway("anthropic/claude-sonnet-4.5");
```

## Using Dedicated Providers

You can also use [first-party](/providers/ai-sdk-providers), [OpenAI-compatible](/providers/openai-compatible-providers), and [community](/providers/community-providers) provider packages directly. Install the package and create a provider instance. For example, to use Anthropic:

<div className="my-4">
  <Tabs items={['pnpm', 'npm', 'yarn', 'bun']}>
    <Tab>
      <Snippet text="pnpm add @ai-sdk/anthropic" dark />
    </Tab>
    <Tab>
      <Snippet text="npm install @ai-sdk/anthropic" dark />
    </Tab>
    <Tab>
      <Snippet text="yarn add @ai-sdk/anthropic" dark />
    </Tab>
    <Tab>
      <Snippet text="bun add @ai-sdk/anthropic" dark />
    </Tab>
  </Tabs>
</div>

```ts
import { anthropic } from "@ai-sdk/anthropic";

model: anthropic("claude-sonnet-4-5");
```

You can change the default global provider so string model references use your preferred provider everywhere in your application. Learn more about [provider management](/docs/ai-sdk-core/provider-management#global-provider-configuration).

See [available providers](/providers/ai-sdk-providers) for setup instructions for each provider.

## Custom Providers

You can build your own provider to integrate any service with the AI SDK. The AI SDK provides a [Language Model Specification](https://github.com/vercel/ai/tree/main/packages/provider/src/language-model/v3) that ensures compatibility across providers.

```ts
import { generateText } from "ai";
import { yourProvider } from "your-custom-provider";

const { text } = await generateText({
  model: yourProvider("your-model-id"),
  prompt: "What is love?",
});
```

See [Writing a Custom Provider](/providers/community-providers/custom-providers) for a complete guide.

# Generating and Streaming Text

Large language models (LLMs) can generate text in response to a prompt, which can contain instructions and information to process.
For example, you can ask a model to come up with a recipe, draft an email, or summarize a document.

The AI SDK Core provides two functions to generate text and stream it from LLMs:

- [`generateText`](#generatetext): Generates text for a given prompt and model.
- [`streamText`](#streamtext): Streams text from a given prompt and model.

Advanced LLM features such as [tool calling](./tools-and-tool-calling) and [structured data generation](./generating-structured-data) are built on top of text generation.

## `generateText`

You can generate text using the [`generateText`](/docs/reference/ai-sdk-core/generate-text) function. This function is ideal for non-interactive use cases where you need to write text (e.g. drafting email or summarizing web pages) and for agents that use tools.

```tsx
import { generateText } from "ai";
__PROVIDER_IMPORT__;

const { text } = await generateText({
  model: __MODEL__,
  prompt: "Write a vegetarian lasagna recipe for 4 people.",
});
```

You can use more [advanced prompts](./prompts) to generate text with more complex instructions and content:

```tsx
import { generateText } from "ai";
__PROVIDER_IMPORT__;

const { text } = await generateText({
  model: __MODEL__,
  system:
    "You are a professional writer. " +
    "You write simple, clear, and concise content.",
  prompt: `Summarize the following article in 3-5 sentences: ${article}`,
});
```

The result object of `generateText` contains several promises that resolve when all required data is available:

- `result.content`: The content that was generated in the last step.
- `result.text`: The generated text.
- `result.reasoning`: The full reasoning that the model has generated in the last step.
- `result.reasoningText`: The reasoning text of the model (only available for some models).
- `result.files`: The files that were generated in the last step.
- `result.sources`: Sources that have been used as references in the last step (only available for some models).
- `result.toolCalls`: The tool calls that were made in the last step.
- `result.toolResults`: The results of the tool calls from the last step.
- `result.finishReason`: The reason the model finished generating text.
- `result.rawFinishReason`: The raw reason why the generation finished (from the provider).
- `result.usage`: The usage of the model during the final step of text generation.
- `result.totalUsage`: The total usage across all steps (for multi-step generations).
- `result.warnings`: Warnings from the model provider (e.g. unsupported settings).
- `result.request`: Additional request information.
- `result.response`: Additional response information, including response messages and body.
- `result.providerMetadata`: Additional provider-specific metadata.
- `result.steps`: Details for all steps, useful for getting information about intermediate steps.
- `result.output`: The generated structured output using the `output` specification.

### Accessing response headers & body

Sometimes you need access to the full response from the model provider,
e.g. to access some provider-specific headers or body content.

You can access the raw response headers and body using the `response` property:

```ts
import { generateText } from "ai";

const result = await generateText({
  // ...
});

console.log(JSON.stringify(result.response.headers, null, 2));
console.log(JSON.stringify(result.response.body, null, 2));
```

### `onFinish` callback

When using `generateText`, you can provide an `onFinish` callback that is triggered after the last step is finished (
[API Reference](/docs/reference/ai-sdk-core/generate-text#on-finish)
).
It contains the text, usage information, finish reason, messages, steps, total usage, and more:

```tsx highlight="6-8"
import { generateText } from "ai";
__PROVIDER_IMPORT__;

const result = await generateText({
  model: __MODEL__,
  prompt: "Invent a new holiday and describe its traditions.",
  onFinish({ text, finishReason, usage, response, steps, totalUsage }) {
    // your own logic, e.g. for saving the chat history or recording usage

    const messages = response.messages; // messages that were generated
  },
});
```

## `streamText`

Depending on your model and prompt, it can take a large language model (LLM) up to a minute to finish generating its response. This delay can be unacceptable for interactive use cases such as chatbots or real-time applications, where users expect immediate responses.

AI SDK Core provides the [`streamText`](/docs/reference/ai-sdk-core/stream-text) function which simplifies streaming text from LLMs:

```ts
import { streamText } from "ai";
__PROVIDER_IMPORT__;

const result = streamText({
  model: __MODEL__,
  prompt: "Invent a new holiday and describe its traditions.",
});

// example: use textStream as an async iterable
for await (const textPart of result.textStream) {
  console.log(textPart);
}
```

<Note>
  `result.textStream` is both a `ReadableStream` and an `AsyncIterable`.
</Note>

<Note type="warning">
  `streamText` immediately starts streaming and suppresses errors to prevent
  server crashes. Use the `onError` callback to log errors.
</Note>

You can use `streamText` on its own or in combination with [AI SDK
UI](/examples/next-pages/basics/streaming-text-generation) and [AI SDK
RSC](/examples/next-app/basics/streaming-text-generation).
The result object contains several helper functions to make the integration into [AI SDK UI](/docs/ai-sdk-ui) easier:

- `result.toUIMessageStreamResponse()`: Creates a UI Message stream HTTP response (with tool calls etc.) that can be used in a Next.js App Router API route.
- `result.pipeUIMessageStreamToResponse()`: Writes UI Message stream delta output to a Node.js response-like object.
- `result.toTextStreamResponse()`: Creates a simple text stream HTTP response.
- `result.pipeTextStreamToResponse()`: Writes text delta output to a Node.js response-like object.

<Note>
  `streamText` is using backpressure and only generates tokens as they are
  requested. You need to consume the stream in order for it to finish.
</Note>

It also provides several promises that resolve when the stream is finished:

- `result.content`: The content that was generated in the last step.
- `result.text`: The generated text.
- `result.reasoning`: The full reasoning that the model has generated.
- `result.reasoningText`: The reasoning text of the model (only available for some models).
- `result.files`: Files that have been generated by the model in the last step.
- `result.sources`: Sources that have been used as references in the last step (only available for some models).
- `result.toolCalls`: The tool calls that have been executed in the last step.
- `result.toolResults`: The tool results that have been generated in the last step.
- `result.finishReason`: The reason the model finished generating text.
- `result.rawFinishReason`: The raw reason why the generation finished (from the provider).
- `result.usage`: The usage of the model during the final step of text generation.
- `result.totalUsage`: The total usage across all steps (for multi-step generations).
- `result.warnings`: Warnings from the model provider (e.g. unsupported settings).
- `result.steps`: Details for all steps, useful for getting information about intermediate steps.
- `result.request`: Additional request information from the last step.
- `result.response`: Additional response information from the last step.
- `result.providerMetadata`: Additional provider-specific metadata from the last step.

### `onError` callback

`streamText` immediately starts streaming to enable sending data without waiting for the model.
Errors become part of the stream and are not thrown to prevent e.g. servers from crashing.

To log errors, you can provide an `onError` callback that is triggered when an error occurs.

```tsx highlight="6-8"
import { streamText } from "ai";
__PROVIDER_IMPORT__;

const result = streamText({
  model: __MODEL__,
  prompt: "Invent a new holiday and describe its traditions.",
  onError({ error }) {
    console.error(error); // your error logging logic here
  },
});
```

### `onChunk` callback

When using `streamText`, you can provide an `onChunk` callback that is triggered for each chunk of the stream.

It receives the following chunk types:

- `text`
- `reasoning`
- `source`
- `tool-call`
- `tool-input-start`
- `tool-input-delta`
- `tool-result`
- `raw`

```tsx highlight="6-11"
import { streamText } from "ai";
__PROVIDER_IMPORT__;

const result = streamText({
  model: __MODEL__,
  prompt: "Invent a new holiday and describe its traditions.",
  onChunk({ chunk }) {
    // implement your own logic here, e.g.:
    if (chunk.type === "text") {
      console.log(chunk.text);
    }
  },
});
```

### `onFinish` callback

When using `streamText`, you can provide an `onFinish` callback that is triggered when the stream is finished (
[API Reference](/docs/reference/ai-sdk-core/stream-text#on-finish)
).
It contains the text, usage information, finish reason, messages, steps, total usage, and more:

```tsx highlight="6-8"
import { streamText } from "ai";
__PROVIDER_IMPORT__;

const result = streamText({
  model: __MODEL__,
  prompt: "Invent a new holiday and describe its traditions.",
  onFinish({ text, finishReason, usage, response, steps, totalUsage }) {
    // your own logic, e.g. for saving the chat history or recording usage

    const messages = response.messages; // messages that were generated
  },
});
```

### `fullStream` property

You can read a stream with all events using the `fullStream` property.
This can be useful if you want to implement your own UI or handle the stream in a different way.
Here is an example of how to use the `fullStream` property:

```tsx
import { streamText } from "ai";
__PROVIDER_IMPORT__;
import { z } from "zod";

const result = streamText({
  model: __MODEL__,
  tools: {
    cityAttractions: {
      inputSchema: z.object({ city: z.string() }),
      execute: async ({ city }) => ({
        attractions: ["attraction1", "attraction2", "attraction3"],
      }),
    },
  },
  prompt: "What are some San Francisco tourist attractions?",
});

for await (const part of result.fullStream) {
  switch (part.type) {
    case "start": {
      // handle start of stream
      break;
    }
    case "start-step": {
      // handle start of step
      break;
    }
    case "text-start": {
      // handle text start
      break;
    }
    case "text-delta": {
      // handle text delta here
      break;
    }
    case "text-end": {
      // handle text end
      break;
    }
    case "reasoning-start": {
      // handle reasoning start
      break;
    }
    case "reasoning-delta": {
      // handle reasoning delta here
      break;
    }
    case "reasoning-end": {
      // handle reasoning end
      break;
    }
    case "source": {
      // handle source here
      break;
    }
    case "file": {
      // handle file here
      break;
    }
    case "tool-call": {
      switch (part.toolName) {
        case "cityAttractions": {
          // handle tool call here
          break;
        }
      }
      break;
    }
    case "tool-input-start": {
      // handle tool input start
      break;
    }
    case "tool-input-delta": {
      // handle tool input delta
      break;
    }
    case "tool-input-end": {
      // handle tool input end
      break;
    }
    case "tool-result": {
      switch (part.toolName) {
        case "cityAttractions": {
          // handle tool result here
          break;
        }
      }
      break;
    }
    case "tool-error": {
      // handle tool error
      break;
    }
    case "finish-step": {
      // handle finish step
      break;
    }
    case "finish": {
      // handle finish here
      break;
    }
    case "error": {
      // handle error here
      break;
    }
    case "raw": {
      // handle raw value
      break;
    }
  }
}
```

### Stream transformation

You can use the `experimental_transform` option to transform the stream.
This is useful for e.g. filtering, changing, or smoothing the text stream.

The transformations are applied before the callbacks are invoked and the promises are resolved.
If you e.g. have a transformation that changes all text to uppercase, the `onFinish` callback will receive the transformed text.

#### Smoothing streams

The AI SDK Core provides a [`smoothStream` function](/docs/reference/ai-sdk-core/smooth-stream) that
can be used to smooth out text streaming.

```tsx highlight="6"
import { smoothStream, streamText } from "ai";

const result = streamText({
  model,
  prompt,
  experimental_transform: smoothStream(),
});
```

#### Custom transformations

You can also implement your own custom transformations.
The transformation function receives the tools that are available to the model,
and returns a function that is used to transform the stream.
Tools can either be generic or limited to the tools that you are using.

Here is an example of how to implement a custom transformation that converts
all text to uppercase:

```ts
const upperCaseTransform =
  <TOOLS extends ToolSet>() =>
  (options: { tools: TOOLS; stopStream: () => void }) =>
    new TransformStream<TextStreamPart<TOOLS>, TextStreamPart<TOOLS>>({
      transform(chunk, controller) {
        controller.enqueue(
          // for text chunks, convert the text to uppercase:
          chunk.type === "text"
            ? { ...chunk, text: chunk.text.toUpperCase() }
            : chunk,
        );
      },
    });
```

You can also stop the stream using the `stopStream` function.
This is e.g. useful if you want to stop the stream when model guardrails are violated, e.g. by generating inappropriate content.

When you invoke `stopStream`, it is important to simulate the `step-finish` and `finish` events to guarantee that a well-formed stream is returned
and all callbacks are invoked.

```ts
const stopWordTransform =
  <TOOLS extends ToolSet>() =>
  ({ stopStream }: { stopStream: () => void }) =>
    new TransformStream<TextStreamPart<TOOLS>, TextStreamPart<TOOLS>>({
      // note: this is a simplified transformation for testing;
      // in a real-world version more there would need to be
      // stream buffering and scanning to correctly emit prior text
      // and to detect all STOP occurrences.
      transform(chunk, controller) {
        if (chunk.type !== "text") {
          controller.enqueue(chunk);
          return;
        }

        if (chunk.text.includes("STOP")) {
          // stop the stream
          stopStream();

          // simulate the finish-step event
          controller.enqueue({
            type: "finish-step",
            finishReason: "stop",
            logprobs: undefined,
            usage: {
              completionTokens: NaN,
              promptTokens: NaN,
              totalTokens: NaN,
            },
            request: {},
            response: {
              id: "response-id",
              modelId: "mock-model-id",
              timestamp: new Date(0),
            },
            warnings: [],
            isContinued: false,
          });

          // simulate the finish event
          controller.enqueue({
            type: "finish",
            finishReason: "stop",
            logprobs: undefined,
            usage: {
              completionTokens: NaN,
              promptTokens: NaN,
              totalTokens: NaN,
            },
            response: {
              id: "response-id",
              modelId: "mock-model-id",
              timestamp: new Date(0),
            },
          });

          return;
        }

        controller.enqueue(chunk);
      },
    });
```

#### Multiple transformations

You can also provide multiple transformations. They are applied in the order they are provided.

```tsx highlight="4"
const result = streamText({
  model,
  prompt,
  experimental_transform: [firstTransform, secondTransform],
});
```

## Sources

Some providers such as [Perplexity](/providers/ai-sdk-providers/perplexity#sources) and
[Google Generative AI](/providers/ai-sdk-providers/google-generative-ai#sources) include sources in the response.

Currently sources are limited to web pages that ground the response.
You can access them using the `sources` property of the result.

Each `url` source contains the following properties:

- `id`: The ID of the source.
- `url`: The URL of the source.
- `title`: The optional title of the source.
- `providerMetadata`: Provider metadata for the source.

When you use `generateText`, you can access the sources using the `sources` property:

```ts
const result = await generateText({
  model: "google/gemini-2.5-flash",
  tools: {
    google_search: google.tools.googleSearch({}),
  },
  prompt: "List the top 5 San Francisco news from the past week.",
});

for (const source of result.sources) {
  if (source.sourceType === "url") {
    console.log("ID:", source.id);
    console.log("Title:", source.title);
    console.log("URL:", source.url);
    console.log("Provider metadata:", source.providerMetadata);
    console.log();
  }
}
```

When you use `streamText`, you can access the sources using the `fullStream` property:

```tsx
const result = streamText({
  model: "google/gemini-2.5-flash",
  tools: {
    google_search: google.tools.googleSearch({}),
  },
  prompt: "List the top 5 San Francisco news from the past week.",
});

for await (const part of result.fullStream) {
  if (part.type === "source" && part.sourceType === "url") {
    console.log("ID:", part.id);
    console.log("Title:", part.title);
    console.log("URL:", part.url);
    console.log("Provider metadata:", part.providerMetadata);
    console.log();
  }
}
```

The sources are also available in the `result.sources` promise.

## Examples

You can see `generateText` and `streamText` in action using various frameworks in the following examples:

### `generateText`

<ExampleLinks
examples={[
{
title: 'Learn to generate text in Node.js',
link: '/examples/node/generating-text/generate-text',
},
{
title:
'Learn to generate text in Next.js with Route Handlers (AI SDK UI)',
link: '/examples/next-pages/basics/generating-text',
},
{
title:
'Learn to generate text in Next.js with Server Actions (AI SDK RSC)',
link: '/examples/next-app/basics/generating-text',
},
]}
/>

### `streamText`

<ExampleLinks
examples={[
{
title: 'Learn to stream text in Node.js',
link: '/examples/node/generating-text/stream-text',
},
{
title: 'Learn to stream text in Next.js with Route Handlers (AI SDK UI)',
link: '/examples/next-pages/basics/streaming-text-generation',
},
{
title: 'Learn to stream text in Next.js with Server Actions (AI SDK RSC)',
link: '/examples/next-app/basics/streaming-text-generation',
},
]}
/>

# Generating Structured Data

While text generation can be useful, your use case will likely call for generating structured data.
For example, you might want to extract information from text, classify data, or generate synthetic data.

Many language models are capable of generating structured data, often defined as using "JSON modes" or "tools".
However, you need to manually provide schemas and then validate the generated data as LLMs can produce incorrect or incomplete structured data.

The AI SDK standardises structured object generation across model providers
using the `output` property on [`generateText`](/docs/reference/ai-sdk-core/generate-text)
and [`streamText`](/docs/reference/ai-sdk-core/stream-text).
You can use [Zod schemas](/docs/reference/ai-sdk-core/zod-schema), [Valibot](/docs/reference/ai-sdk-core/valibot-schema), or [JSON schemas](/docs/reference/ai-sdk-core/json-schema) to specify the shape of the data that you want,
and the AI model will generate data that conforms to that structure.

<Note>
  Structured output generation is part of the `generateText` and `streamText`
  flow. This means you can combine it with tool calling in the same request.
</Note>

## Generating Structured Outputs

Use `generateText` with `Output.object()` to generate structured data from a prompt.
The schema is also used to validate the generated data, ensuring type safety and correctness.

```ts
import { generateText, Output } from "ai";
__PROVIDER_IMPORT__;
import { z } from "zod";

const { output } = await generateText({
  model: __MODEL__,
  output: Output.object({
    schema: z.object({
      recipe: z.object({
        name: z.string(),
        ingredients: z.array(
          z.object({ name: z.string(), amount: z.string() }),
        ),
        steps: z.array(z.string()),
      }),
    }),
  }),
  prompt: "Generate a lasagna recipe.",
});
```

<Note>
  Structured output generation counts as a step in the AI SDK's multi-turn
  execution model (where each model call or tool execution is one step). When
  combining with tools, account for this in your `stopWhen` configuration.
</Note>

### Accessing response headers & body

Sometimes you need access to the full response from the model provider,
e.g. to access some provider-specific headers or body content.

You can access the raw response headers and body using the `response` property:

```ts
import { generateText, Output } from "ai";

const result = await generateText({
  // ...
  output: Output.object({ schema }),
});

console.log(JSON.stringify(result.response.headers, null, 2));
console.log(JSON.stringify(result.response.body, null, 2));
```

## Stream Structured Outputs

Given the added complexity of returning structured data, model response time can be unacceptable for your interactive use case.
With `streamText` and `output`, you can stream the model's structured response as it is generated.

```ts
import { streamText, Output } from "ai";
__PROVIDER_IMPORT__;
import { z } from "zod";

const { partialOutputStream } = streamText({
  model: __MODEL__,
  output: Output.object({
    schema: z.object({
      recipe: z.object({
        name: z.string(),
        ingredients: z.array(
          z.object({ name: z.string(), amount: z.string() }),
        ),
        steps: z.array(z.string()),
      }),
    }),
  }),
  prompt: "Generate a lasagna recipe.",
});

// use partialOutputStream as an async iterable
for await (const partialObject of partialOutputStream) {
  console.log(partialObject);
}
```

You can consume the structured output on the client with the [`useObject`](/docs/reference/ai-sdk-ui/use-object) hook.

### Error Handling in Streams

`streamText` starts streaming immediately. When errors occur during streaming, they become part of the stream rather than thrown exceptions (to prevent stream crashes).

To handle errors, provide an `onError` callback:

```tsx highlight="5-7"
import { streamText, Output } from "ai";

const result = streamText({
  // ...
  output: Output.object({ schema }),
  onError({ error }) {
    console.error(error); // log to your error tracking service
  },
});
```

For non-streaming error handling with `generateText`, see the [Error Handling](#error-handling) section below.

## Output Types

The AI SDK supports multiple ways of specifying the expected structure of generated data via the `Output` object. You can select from various strategies for structured/text generation and validation.

### `Output.text()`

Use `Output.text()` to generate plain text from a model. This option doesn't enforce any schema on the result: you simply receive the model's text as a string. This is the default behavior when no `output` is specified.

```ts
import { generateText, Output } from "ai";

const { output } = await generateText({
  // ...
  output: Output.text(),
  prompt: "Tell me a joke.",
});
// output will be a string (the joke)
```

### `Output.object()`

Use `Output.object({ schema })` to generate a structured object based on a schema (for example, a Zod schema). The output is type-validated to ensure the returned result matches the schema.

```ts
import { generateText, Output } from "ai";
import { z } from "zod";

const { output } = await generateText({
  // ...
  output: Output.object({
    schema: z.object({
      name: z.string(),
      age: z.number().nullable(),
      labels: z.array(z.string()),
    }),
  }),
  prompt: "Generate information for a test user.",
});
// output will be an object matching the schema above
```

<Note>
  Partial outputs streamed via `streamText` cannot be validated against your
  provided schema, as incomplete data may not yet conform to the expected
  structure.
</Note>

### `Output.array()`

Use `Output.array({ element })` to specify that you expect an array of typed objects from the model, where each element should conform to a schema (defined in the `element` property).

```ts
import { generateText, Output } from "ai";
import { z } from "zod";

const { output } = await generateText({
  // ...
  output: Output.array({
    element: z.object({
      location: z.string(),
      temperature: z.number(),
      condition: z.string(),
    }),
  }),
  prompt: "List the weather for San Francisco and Paris.",
});
// output will be an array of objects like:
// [
//   { location: 'San Francisco', temperature: 70, condition: 'Sunny' },
//   { location: 'Paris', temperature: 65, condition: 'Cloudy' },
// ]
```

With `streamText`, you can also iterate over the generated array elements using `elementStream`:

```ts highlight="7,18"
import { streamText, Output } from "ai";
__PROVIDER_IMPORT__;
import { z } from "zod";

const { elementStream } = streamText({
  model: __MODEL__,
  output: Output.array({
    element: z.object({
      name: z.string(),
      class: z
        .string()
        .describe("Character class, e.g. warrior, mage, or thief."),
      description: z.string(),
    }),
  }),
  prompt: "Generate 3 hero descriptions for a fantasy role playing game.",
});

for await (const hero of elementStream) {
  console.log(hero);
}
```

<Note>
  Each element emitted by `elementStream` is complete and validated against your
  element schema, ensuring type safety for each item as it is generated.
</Note>

### `Output.choice()`

Use `Output.choice({ options })` when you expect the model to choose from a specific set of string options, such as for classification or fixed-enum answers.

```ts
import { generateText, Output } from "ai";

const { output } = await generateText({
  // ...
  output: Output.choice({
    options: ["sunny", "rainy", "snowy"],
  }),
  prompt: "Is the weather sunny, rainy, or snowy today?",
});
// output will be one of: 'sunny', 'rainy', or 'snowy'
```

You can provide any set of string options, and the output will always be a single string value that matches one of the specified options. The AI SDK validates that the result matches one of your options, and will throw if the model returns something invalid.

This is especially useful for making classification-style generations or forcing valid values for API compatibility.

### `Output.json()`

Use `Output.json()` when you want to generate and parse unstructured JSON values from the model, without enforcing a specific schema. This is useful if you want to capture arbitrary objects, flexible structures, or when you want to rely on the model's natural output rather than rigid validation.

```ts
import { generateText, Output } from "ai";

const { output } = await generateText({
  // ...
  output: Output.json(),
  prompt:
    "For each city, return the current temperature and weather condition as a JSON object.",
});

// output could be any valid JSON, for example:
// {
//   "San Francisco": { "temperature": 70, "condition": "Sunny" },
//   "Paris": { "temperature": 65, "condition": "Cloudy" }
// }
```

With `Output.json`, the AI SDK only checks that the response is valid JSON; it doesn't validate the structure or types of the values. If you need schema validation, use the `.object` or `.array` outputs instead.

For more advanced validation or different structures, see [the Output API reference](/docs/reference/ai-sdk-core/output).

## Generating Structured Outputs with Tools

One of the key advantages of using structured output with `generateText` and `streamText` is the ability to combine it with tool calling.

```ts
import { generateText, Output, tool, stepCountIs } from "ai";
__PROVIDER_IMPORT__;
import { z } from "zod";

const { output } = await generateText({
  model: __MODEL__,
  tools: {
    weather: tool({
      description: "Get the weather for a location",
      inputSchema: z.object({ location: z.string() }),
      execute: async ({ location }) => {
        // fetch weather data
        return { temperature: 72, condition: "sunny" };
      },
    }),
  },
  output: Output.object({
    schema: z.object({
      summary: z.string(),
      recommendation: z.string(),
    }),
  }),
  stopWhen: stepCountIs(5),
  prompt: "What should I wear in San Francisco today?",
});
```

<Note>
  When using tools with structured output, remember that generating the
  structured output counts as a step. Configure `stopWhen` to allow enough steps
  for both tool execution and output generation.
</Note>

## Property Descriptions

You can add `.describe("...")` to individual schema properties to give the model hints about what each property is for. This helps improve the quality and accuracy of generated structured data:

```ts highlight="5,9"
import { generateText, Output } from "ai";
__PROVIDER_IMPORT__;
import { z } from "zod";

const { output } = await generateText({
  model: __MODEL__,
  output: Output.object({
    schema: z.object({
      name: z.string().describe("The name of the recipe"),
      ingredients: z
        .array(
          z.object({
            name: z.string(),
            amount: z
              .string()
              .describe("The amount of the ingredient (grams or ml)"),
          }),
        )
        .describe("List of ingredients with amounts"),
      steps: z.array(z.string()).describe("Step-by-step cooking instructions"),
    }),
  }),
  prompt: "Generate a lasagna recipe.",
});
```

Property descriptions are particularly useful for:

- Clarifying ambiguous property names
- Specifying expected formats or conventions
- Providing context for complex nested structures

## Output Name and Description

You can optionally specify a `name` and `description` for the output. These are used by some providers for additional LLM guidance, e.g. via tool or schema name.

```ts highlight="6-7"
import { generateText, Output } from "ai";
__PROVIDER_IMPORT__;
import { z } from "zod";

const { output } = await generateText({
  model: __MODEL__,
  output: Output.object({
    name: "Recipe",
    description: "A recipe for a dish.",
    schema: z.object({
      name: z.string(),
      ingredients: z.array(z.object({ name: z.string(), amount: z.string() })),
      steps: z.array(z.string()),
    }),
  }),
  prompt: "Generate a lasagna recipe.",
});
```

This works with all output types that support structured generation:

- `Output.object({ name, description, schema })`
- `Output.array({ name, description, element })`
- `Output.choice({ name, description, options })`
- `Output.json({ name, description })`

## Accessing Reasoning

You can access the reasoning used by the language model to generate the object via the `reasoning` property on the result. This property contains a string with the model's thought process, if available.

```ts
import { generateText, Output } from "ai";
__PROVIDER_IMPORT__;
import { z } from "zod";

const result = await generateText({
  model: __MODEL__, // must be a reasoning model
  output: Output.object({
    schema: z.object({
      recipe: z.object({
        name: z.string(),
        ingredients: z.array(
          z.object({
            name: z.string(),
            amount: z.string(),
          }),
        ),
        steps: z.array(z.string()),
      }),
    }),
  }),
  prompt: "Generate a lasagna recipe.",
});

console.log(result.reasoning);
```

## Error Handling

When `generateText` with structured output cannot generate a valid object, it throws a [`AI_NoObjectGeneratedError`](/docs/reference/ai-sdk-errors/ai-no-object-generated-error).

This error occurs when the AI provider fails to generate a parsable object that conforms to the schema.
It can arise due to the following reasons:

- The model failed to generate a response.
- The model generated a response that could not be parsed.
- The model generated a response that could not be validated against the schema.

The error preserves the following information to help you log the issue:

- `text`: The text that was generated by the model. This can be the raw text or the tool call text, depending on the object generation mode.
- `response`: Metadata about the language model response, including response id, timestamp, and model.
- `usage`: Request token usage.
- `cause`: The cause of the error (e.g. a JSON parsing error). You can use this for more detailed error handling.

```ts
import { generateText, Output, NoObjectGeneratedError } from "ai";

try {
  await generateText({
    model,
    output: Output.object({ schema }),
    prompt,
  });
} catch (error) {
  if (NoObjectGeneratedError.isInstance(error)) {
    console.log("NoObjectGeneratedError");
    console.log("Cause:", error.cause);
    console.log("Text:", error.text);
    console.log("Response:", error.response);
    console.log("Usage:", error.usage);
  }
}
```

## generateObject and streamObject (Legacy)

<Note type="warning">
  `generateObject` and `streamObject` are deprecated. Use `generateText` and
  `streamText` with the `output` property instead. The legacy functions will be
  removed in a future major version.
</Note>

The `generateObject` and `streamObject` functions are the legacy way to generate structured data. They work similarly to `generateText` and `streamText` with `Output.object()`, but as standalone functions.

### generateObject

```ts
import { generateObject } from "ai";
__PROVIDER_IMPORT__;
import { z } from "zod";

const { object } = await generateObject({
  model: __MODEL__,
  schema: z.object({
    recipe: z.object({
      name: z.string(),
      ingredients: z.array(z.object({ name: z.string(), amount: z.string() })),
      steps: z.array(z.string()),
    }),
  }),
  prompt: "Generate a lasagna recipe.",
});
```

### streamObject

```ts
import { streamObject } from "ai";
__PROVIDER_IMPORT__;
import { z } from "zod";

const { partialObjectStream } = streamObject({
  model: __MODEL__,
  schema: z.object({
    recipe: z.object({
      name: z.string(),
      ingredients: z.array(z.object({ name: z.string(), amount: z.string() })),
      steps: z.array(z.string()),
    }),
  }),
  prompt: "Generate a lasagna recipe.",
});

for await (const partialObject of partialObjectStream) {
  console.log(partialObject);
}
```

### Schema Name and Description (Legacy)

You can optionally specify a name and description for the schema. These are used by some providers for additional LLM guidance, e.g. via tool or schema name.

```ts highlight="4-5"
import { generateObject } from "ai";
__PROVIDER_IMPORT__;
import { z } from "zod";

const { object } = await generateObject({
  model: __MODEL__,
  schemaName: "Recipe",
  schemaDescription: "A recipe for a dish.",
  schema: z.object({
    name: z.string(),
    ingredients: z.array(z.object({ name: z.string(), amount: z.string() })),
    steps: z.array(z.string()),
  }),
  prompt: "Generate a lasagna recipe.",
});
```

### Output Strategy (Legacy)

The legacy functions support different output strategies via the `output` parameter:

#### Array

Generate an array of objects. The schema specifies the shape of an array element.

```ts highlight="7"
import { streamObject } from "ai";
__PROVIDER_IMPORT__;
import { z } from "zod";

const { elementStream } = streamObject({
  model: __MODEL__,
  output: "array",
  schema: z.object({
    name: z.string(),
    class: z
      .string()
      .describe("Character class, e.g. warrior, mage, or thief."),
    description: z.string(),
  }),
  prompt: "Generate 3 hero descriptions for a fantasy role playing game.",
});

for await (const hero of elementStream) {
  console.log(hero);
}
```

#### Enum

Generate a specific enum value for classification tasks.

```ts highlight="5-6"
import { generateObject } from "ai";
__PROVIDER_IMPORT__;

const { object } = await generateObject({
  model: __MODEL__,
  output: "enum",
  enum: ["action", "comedy", "drama", "horror", "sci-fi"],
  prompt:
    "Classify the genre of this movie plot: " +
    '"A group of astronauts travel through a wormhole in search of a ' +
    'new habitable planet for humanity."',
});
```

#### No Schema

Generate unstructured JSON without a schema.

```ts highlight="6"
import { generateObject } from "ai";
__PROVIDER_IMPORT__;

const { object } = await generateObject({
  model: __MODEL__,
  output: "no-schema",
  prompt: "Generate a lasagna recipe.",
});
```

### Repairing Invalid JSON (Legacy)

<Note type="warning">
  The `repairText` function is experimental and may change in the future.
</Note>

Sometimes the model will generate invalid or malformed JSON.
You can use the `repairText` function to attempt to repair the JSON.

```ts highlight="7-10"
import { generateObject } from "ai";

const { object } = await generateObject({
  model,
  schema,
  prompt,
  experimental_repairText: async ({ text, error }) => {
    // example: add a closing brace to the text
    return text + "}";
  },
});
```

## More Examples

You can see `generateObject` and `streamObject` in action using various frameworks in the following examples:

### `generateObject`

<ExampleLinks
examples={[
{
title: 'Learn to generate objects in Node.js',
link: '/examples/node/generating-structured-data/generate-object',
},
{
title:
'Learn to generate objects in Next.js with Route Handlers (AI SDK UI)',
link: '/examples/next-pages/basics/generating-object',
},
{
title:
'Learn to generate objects in Next.js with Server Actions (AI SDK RSC)',
link: '/examples/next-app/basics/generating-object',
},
]}
/>

### `streamText` with Output

<ExampleLinks
examples={[
{
title: 'Learn to stream objects in Node.js',
link: '/examples/node/streaming-structured-data/stream-object',
},
{
title:
'Learn to stream objects in Next.js with Route Handlers (AI SDK UI)',
link: '/examples/next-pages/basics/streaming-object-generation',
},
{
title:
'Learn to stream objects in Next.js with Server Actions (AI SDK RSC)',
link: '/examples/next-app/basics/streaming-object-generation',
},
]}
/>

# AI SDK UI

AI SDK UI is designed to help you build interactive chat, completion, and assistant applications with ease. It is a **framework-agnostic toolkit**, streamlining the integration of advanced AI functionalities into your applications.

AI SDK UI provides robust abstractions that simplify the complex tasks of managing chat streams and UI updates on the frontend, enabling you to develop dynamic AI-driven interfaces more efficiently. With three main hooks — **`useChat`**, **`useCompletion`**, and **`useObject`** — you can incorporate real-time chat capabilities, text completions, streamed JSON, and interactive assistant features into your app.

- **[`useChat`](/docs/ai-sdk-ui/chatbot)** offers real-time streaming of chat messages, abstracting state management for inputs, messages, loading, and errors, allowing for seamless integration into any UI design.
- **[`useCompletion`](/docs/ai-sdk-ui/completion)** enables you to handle text completions in your applications, managing the prompt input and automatically updating the UI as new completions are streamed.
- **[`useObject`](/docs/ai-sdk-ui/object-generation)** is a hook that allows you to consume streamed JSON objects, providing a simple way to handle and display structured data in your application.

These hooks are designed to reduce the complexity and time required to implement AI interactions, letting you focus on creating exceptional user experiences.

## UI Framework Support

AI SDK UI supports the following frameworks: [React](https://react.dev/), [Svelte](https://svelte.dev/), [Vue.js](https://vuejs.org/),
[Angular](https://angular.dev/), and [SolidJS](https://www.solidjs.com/).

Here is a comparison of the supported functions across these frameworks:

|                                                                 | [useChat](/docs/reference/ai-sdk-ui/use-chat) | [useCompletion](/docs/reference/ai-sdk-ui/use-completion) | [useObject](/docs/reference/ai-sdk-ui/use-object) |
| --------------------------------------------------------------- | --------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------- |
| React `@ai-sdk/react`                                           | <Check size={18} />                           | <Check size={18} />                                       | <Check size={18} />                               |
| Vue.js `@ai-sdk/vue`                                            | <Check size={18} />                           | <Check size={18} />                                       | <Check size={18} />                               |
| Svelte `@ai-sdk/svelte`                                         | <Check size={18} /> Chat                      | <Check size={18} /> Completion                            | <Check size={18} /> StructuredObject              |
| Angular `@ai-sdk/angular`                                       | <Check size={18} /> Chat                      | <Check size={18} /> Completion                            | <Check size={18} /> StructuredObject              |
| [SolidJS](https://github.com/kodehort/ai-sdk-solid) (community) | <Check size={18} />                           | <Check size={18} />                                       | <Check size={18} />                               |

## Framework Examples

Explore these example implementations for different frameworks:

- [**Next.js**](https://github.com/vercel/ai/tree/main/examples/next-openai)
- [**Nuxt**](https://github.com/vercel/ai/tree/main/examples/nuxt-openai)
- [**SvelteKit**](https://github.com/vercel/ai/tree/main/examples/sveltekit-openai)
- [**Angular**](https://github.com/vercel/ai/tree/main/examples/angular)

## API Reference

Please check out the [AI SDK UI API Reference](/docs/reference/ai-sdk-ui) for more details on each function.

# Chatbot

The `useChat` hook makes it effortless to create a conversational user interface for your chatbot application. It enables the streaming of chat messages from your AI provider, manages the chat state, and updates the UI automatically as new messages arrive.

To summarize, the `useChat` hook provides the following features:

- **Message Streaming**: All the messages from the AI provider are streamed to the chat UI in real-time.
- **Managed States**: The hook manages the states for input, messages, status, error and more for you.
- **Seamless Integration**: Easily integrate your chat AI into any design or layout with minimal effort.

In this guide, you will learn how to use the `useChat` hook to create a chatbot application with real-time message streaming.
Check out our [chatbot with tools guide](/docs/ai-sdk-ui/chatbot-with-tool-calling) to learn how to use tools in your chatbot.
Let's start with the following example first.

## Example

```tsx filename='app/page.tsx'
"use client";

import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { useState } from "react";

export default function Page() {
  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({
      api: "/api/chat",
    }),
  });
  const [input, setInput] = useState("");

  return (
    <>
      {messages.map((message) => (
        <div key={message.id}>
          {message.role === "user" ? "User: " : "AI: "}
          {message.parts.map((part, index) =>
            part.type === "text" ? <span key={index}>{part.text}</span> : null,
          )}
        </div>
      ))}

      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (input.trim()) {
            sendMessage({ text: input });
            setInput("");
          }
        }}
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={status !== "ready"}
          placeholder="Say something..."
        />
        <button type="submit" disabled={status !== "ready"}>
          Submit
        </button>
      </form>
    </>
  );
}
```

```ts filename='app/api/chat/route.ts'
import { convertToModelMessages, streamText, UIMessage } from "ai";
__PROVIDER_IMPORT__;

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const result = streamText({
    model: __MODEL__,
    system: "You are a helpful assistant.",
    messages: await convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse();
}
```

<Note>
  The UI messages have a new `parts` property that contains the message parts.
  We recommend rendering the messages using the `parts` property instead of the
  `content` property. The parts property supports different message types,
  including text, tool invocation, and tool result, and allows for more flexible
  and complex chat UIs.
</Note>

In the `Page` component, the `useChat` hook will request to your AI provider endpoint whenever the user sends a message using `sendMessage`.
The messages are then streamed back in real-time and displayed in the chat UI.

This enables a seamless chat experience where the user can see the AI response as soon as it is available,
without having to wait for the entire response to be received.

## Customized UI

`useChat` also provides ways to manage the chat message states via code, show status, and update messages without being triggered by user interactions.

### Status

The `useChat` hook returns a `status`. It has the following possible values:

- `submitted`: The message has been sent to the API and we're awaiting the start of the response stream.
- `streaming`: The response is actively streaming in from the API, receiving chunks of data.
- `ready`: The full response has been received and processed; a new user message can be submitted.
- `error`: An error occurred during the API request, preventing successful completion.

You can use `status` for e.g. the following purposes:

- To show a loading spinner while the chatbot is processing the user's message.
- To show a "Stop" button to abort the current message.
- To disable the submit button.

```tsx filename='app/page.tsx' highlight="6,22-29,36"
"use client";

import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { useState } from "react";

export default function Page() {
  const { messages, sendMessage, status, stop } = useChat({
    transport: new DefaultChatTransport({
      api: "/api/chat",
    }),
  });
  const [input, setInput] = useState("");

  return (
    <>
      {messages.map((message) => (
        <div key={message.id}>
          {message.role === "user" ? "User: " : "AI: "}
          {message.parts.map((part, index) =>
            part.type === "text" ? <span key={index}>{part.text}</span> : null,
          )}
        </div>
      ))}

      {(status === "submitted" || status === "streaming") && (
        <div>
          {status === "submitted" && <Spinner />}
          <button type="button" onClick={() => stop()}>
            Stop
          </button>
        </div>
      )}

      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (input.trim()) {
            sendMessage({ text: input });
            setInput("");
          }
        }}
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={status !== "ready"}
          placeholder="Say something..."
        />
        <button type="submit" disabled={status !== "ready"}>
          Submit
        </button>
      </form>
    </>
  );
}
```

### Error State

Similarly, the `error` state reflects the error object thrown during the fetch request.
It can be used to display an error message, disable the submit button, or show a retry button:

<Note>
  We recommend showing a generic error message to the user, such as "Something
  went wrong." This is a good practice to avoid leaking information from the
  server.
</Note>

```tsx file="app/page.tsx" highlight="6,20-27,33"
"use client";

import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { useState } from "react";

export default function Chat() {
  const { messages, sendMessage, error, reload } = useChat({
    transport: new DefaultChatTransport({
      api: "/api/chat",
    }),
  });
  const [input, setInput] = useState("");

  return (
    <div>
      {messages.map((m) => (
        <div key={m.id}>
          {m.role}:{" "}
          {m.parts.map((part, index) =>
            part.type === "text" ? <span key={index}>{part.text}</span> : null,
          )}
        </div>
      ))}

      {error && (
        <>
          <div>An error occurred.</div>
          <button type="button" onClick={() => reload()}>
            Retry
          </button>
        </>
      )}

      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (input.trim()) {
            sendMessage({ text: input });
            setInput("");
          }
        }}
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={error != null}
        />
      </form>
    </div>
  );
}
```

Please also see the [error handling](/docs/ai-sdk-ui/error-handling) guide for more information.

### Modify messages

Sometimes, you may want to directly modify some existing messages. For example, a delete button can be added to each message to allow users to remove them from the chat history.

The `setMessages` function can help you achieve these tasks:

```tsx
const { messages, setMessages } = useChat()

const handleDelete = (id) => {
  setMessages(messages.filter(message => message.id !== id))
}

return <>
  {messages.map(message => (
    <div key={message.id}>
      {message.role === 'user' ? 'User: ' : 'AI: '}
      {message.parts.map((part, index) => (
        part.type === 'text' ? (
          <span key={index}>{part.text}</span>
        ) : null
      ))}
      <button onClick={() => handleDelete(message.id)}>Delete</button>
    </div>
  ))}
  ...
```

You can think of `messages` and `setMessages` as a pair of `state` and `setState` in React.

### Cancellation and regeneration

It's also a common use case to abort the response message while it's still streaming back from the AI provider. You can do this by calling the `stop` function returned by the `useChat` hook.

```tsx
const { stop, status } = useChat()

return <>
  <button onClick={stop} disabled={!(status === 'streaming' || status === 'submitted')}>Stop</button>
  ...
```

When the user clicks the "Stop" button, the fetch request will be aborted. This avoids consuming unnecessary resources and improves the UX of your chatbot application.

Similarly, you can also request the AI provider to reprocess the last message by calling the `regenerate` function returned by the `useChat` hook:

```tsx
const { regenerate, status } = useChat();

return (
  <>
    <button
      onClick={regenerate}
      disabled={!(status === "ready" || status === "error")}
    >
      Regenerate
    </button>
    ...
  </>
);
```

When the user clicks the "Regenerate" button, the AI provider will regenerate the last message and replace the current one correspondingly.

### Throttling UI Updates

<Note>This feature is currently only available for React.</Note>

By default, the `useChat` hook will trigger a render every time a new chunk is received.
You can throttle the UI updates with the `experimental_throttle` option.

```tsx filename="page.tsx" highlight="2-3"
const { messages, ... } = useChat({
  // Throttle the messages and data updates to 50ms:
  experimental_throttle: 50
})
```

## Event Callbacks

`useChat` provides optional event callbacks that you can use to handle different stages of the chatbot lifecycle:

- `onFinish`: Called when the assistant response is completed. The event includes the response message, all messages, and flags for abort, disconnect, and errors.
- `onError`: Called when an error occurs during the fetch request.
- `onData`: Called whenever a data part is received.

These callbacks can be used to trigger additional actions, such as logging, analytics, or custom UI updates.

```tsx
import { UIMessage } from "ai";

const {
  /* ... */
} = useChat({
  onFinish: ({ message, messages, isAbort, isDisconnect, isError }) => {
    // use information to e.g. update other UI states
  },
  onError: (error) => {
    console.error("An error occurred:", error);
  },
  onData: (data) => {
    console.log("Received data part from server:", data);
  },
});
```

It's worth noting that you can abort the processing by throwing an error in the `onData` callback. This will trigger the `onError` callback and stop the message from being appended to the chat UI. This can be useful for handling unexpected responses from the AI provider.

## Request Configuration

### Custom headers, body, and credentials

By default, the `useChat` hook sends a HTTP POST request to the `/api/chat` endpoint with the message list as the request body. You can customize the request in two ways:

#### Hook-Level Configuration (Applied to all requests)

You can configure transport-level options that will be applied to all requests made by the hook:

```tsx
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";

const { messages, sendMessage } = useChat({
  transport: new DefaultChatTransport({
    api: "/api/custom-chat",
    headers: {
      Authorization: "your_token",
    },
    body: {
      user_id: "123",
    },
    credentials: "same-origin",
  }),
});
```

#### Dynamic Hook-Level Configuration

You can also provide functions that return configuration values. This is useful for authentication tokens that need to be refreshed, or for configuration that depends on runtime conditions:

```tsx
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";

const { messages, sendMessage } = useChat({
  transport: new DefaultChatTransport({
    api: "/api/custom-chat",
    headers: () => ({
      Authorization: `Bearer ${getAuthToken()}`,
      "X-User-ID": getCurrentUserId(),
    }),
    body: () => ({
      sessionId: getCurrentSessionId(),
      preferences: getUserPreferences(),
    }),
    credentials: () => "include",
  }),
});
```

<Note>
  For component state that changes over time, use `useRef` to store the current
  value and reference `ref.current` in your configuration function, or prefer
  request-level options (see next section) for better reliability.
</Note>

#### Request-Level Configuration (Recommended)

<Note>
  **Recommended**: Use request-level options for better flexibility and control.
  Request-level options take precedence over hook-level options and allow you to
  customize each request individually.
</Note>

```tsx
// Pass options as the second parameter to sendMessage
sendMessage(
  { text: input },
  {
    headers: {
      Authorization: "Bearer token123",
      "X-Custom-Header": "custom-value",
    },
    body: {
      temperature: 0.7,
      max_tokens: 100,
      user_id: "123",
    },
    metadata: {
      userId: "user123",
      sessionId: "session456",
    },
  },
);
```

The request-level options are merged with hook-level options, with request-level options taking precedence. On your server side, you can handle the request with this additional information.

### Setting custom body fields per request

You can configure custom `body` fields on a per-request basis using the second parameter of the `sendMessage` function.
This is useful if you want to pass in additional information to your backend that is not part of the message list.

```tsx filename="app/page.tsx" highlight="20-25"
"use client";

import { useChat } from "@ai-sdk/react";
import { useState } from "react";

export default function Chat() {
  const { messages, sendMessage } = useChat();
  const [input, setInput] = useState("");

  return (
    <div>
      {messages.map((m) => (
        <div key={m.id}>
          {m.role}:{" "}
          {m.parts.map((part, index) =>
            part.type === "text" ? <span key={index}>{part.text}</span> : null,
          )}
        </div>
      ))}

      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (input.trim()) {
            sendMessage(
              { text: input },
              {
                body: {
                  customKey: "customValue",
                },
              },
            );
            setInput("");
          }
        }}
      >
        <input value={input} onChange={(e) => setInput(e.target.value)} />
      </form>
    </div>
  );
}
```

You can retrieve these custom fields on your server side by destructuring the request body:

```ts filename="app/api/chat/route.ts" highlight="3,4"
export async function POST(req: Request) {
  // Extract additional information ("customKey") from the body of the request:
  const { messages, customKey }: { messages: UIMessage[]; customKey: string } =
    await req.json();
  //...
}
```

## Message Metadata

You can attach custom metadata to messages for tracking information like timestamps, model details, and token usage.

```ts
// Server: Send metadata about the message
return result.toUIMessageStreamResponse({
  messageMetadata: ({ part }) => {
    if (part.type === "start") {
      return {
        createdAt: Date.now(),
        model: "gpt-5.1",
      };
    }

    if (part.type === "finish") {
      return {
        totalTokens: part.totalUsage.totalTokens,
      };
    }
  },
});
```

```tsx
// Client: Access metadata via message.metadata
{
  messages.map((message) => (
    <div key={message.id}>
      {message.role}:{" "}
      {message.metadata?.createdAt &&
        new Date(message.metadata.createdAt).toLocaleTimeString()}
      {/* Render message content */}
      {message.parts.map((part, index) =>
        part.type === "text" ? <span key={index}>{part.text}</span> : null,
      )}
      {/* Show token count if available */}
      {message.metadata?.totalTokens && (
        <span>{message.metadata.totalTokens} tokens</span>
      )}
    </div>
  ));
}
```

For complete examples with type safety and advanced use cases, see the [Message Metadata documentation](/docs/ai-sdk-ui/message-metadata).

## Transport Configuration

You can configure custom transport behavior using the `transport` option to customize how messages are sent to your API:

```tsx filename="app/page.tsx"
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";

export default function Chat() {
  const { messages, sendMessage } = useChat({
    id: "my-chat",
    transport: new DefaultChatTransport({
      prepareSendMessagesRequest: ({ id, messages }) => {
        return {
          body: {
            id,
            message: messages[messages.length - 1],
          },
        };
      },
    }),
  });

  // ... rest of your component
}
```

The corresponding API route receives the custom request format:

```ts filename="app/api/chat/route.ts"
export async function POST(req: Request) {
  const { id, message } = await req.json();

  // Load existing messages and add the new one
  const messages = await loadMessages(id);
  messages.push(message);

  const result = streamText({
    model: __MODEL__,
    messages: await convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse();
}
```

### Advanced: Trigger-based routing

For more complex scenarios like message regeneration, you can use trigger-based routing:

```tsx filename="app/page.tsx"
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";

export default function Chat() {
  const { messages, sendMessage, regenerate } = useChat({
    id: "my-chat",
    transport: new DefaultChatTransport({
      prepareSendMessagesRequest: ({ id, messages, trigger, messageId }) => {
        if (trigger === "submit-user-message") {
          return {
            body: {
              trigger: "submit-user-message",
              id,
              message: messages[messages.length - 1],
              messageId,
            },
          };
        } else if (trigger === "regenerate-assistant-message") {
          return {
            body: {
              trigger: "regenerate-assistant-message",
              id,
              messageId,
            },
          };
        }
        throw new Error(`Unsupported trigger: ${trigger}`);
      },
    }),
  });

  // ... rest of your component
}
```

The corresponding API route would handle different triggers:

```ts filename="app/api/chat/route.ts"
export async function POST(req: Request) {
  const { trigger, id, message, messageId } = await req.json();

  const chat = await readChat(id);
  let messages = chat.messages;

  if (trigger === "submit-user-message") {
    // Handle new user message
    messages = [...messages, message];
  } else if (trigger === "regenerate-assistant-message") {
    // Handle message regeneration - remove messages after messageId
    const messageIndex = messages.findIndex((m) => m.id === messageId);
    if (messageIndex !== -1) {
      messages = messages.slice(0, messageIndex);
    }
  }

  const result = streamText({
    model: __MODEL__,
    messages: await convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse();
}
```

To learn more about building custom transports, refer to the [Transport API documentation](/docs/ai-sdk-ui/transport).

## Controlling the response stream

With `streamText`, you can control how error messages and usage information are sent back to the client.

### Error Messages

By default, the error message is masked for security reasons.
The default error message is "An error occurred."
You can forward error messages or send your own error message by providing a `getErrorMessage` function:

```ts filename="app/api/chat/route.ts" highlight="13-27"
import { convertToModelMessages, streamText, UIMessage } from "ai";
__PROVIDER_IMPORT__;

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const result = streamText({
    model: __MODEL__,
    messages: await convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse({
    onError: (error) => {
      if (error == null) {
        return "unknown error";
      }

      if (typeof error === "string") {
        return error;
      }

      if (error instanceof Error) {
        return error.message;
      }

      return JSON.stringify(error);
    },
  });
}
```

### Usage Information

Track token consumption and resource usage with [message metadata](/docs/ai-sdk-ui/message-metadata):

1. Define a custom metadata type with usage fields (optional, for type safety)
2. Attach usage data using `messageMetadata` in your response
3. Display usage metrics in your UI components

Usage data is attached as metadata to messages and becomes available once the model completes its response generation.

```ts
import { openai } from "@ai-sdk/openai";
import {
  convertToModelMessages,
  streamText,
  UIMessage,
  type LanguageModelUsage,
} from "ai";
__PROVIDER_IMPORT__;

// Create a new metadata type (optional for type-safety)
type MyMetadata = {
  totalUsage: LanguageModelUsage;
};

// Create a new custom message type with your own metadata
export type MyUIMessage = UIMessage<MyMetadata>;

export async function POST(req: Request) {
  const { messages }: { messages: MyUIMessage[] } = await req.json();

  const result = streamText({
    model: __MODEL__,
    messages: await convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse({
    originalMessages: messages,
    messageMetadata: ({ part }) => {
      // Send total usage when generation is finished
      if (part.type === "finish") {
        return { totalUsage: part.totalUsage };
      }
    },
  });
}
```

Then, on the client, you can access the message-level metadata.

```tsx
"use client";

import { useChat } from "@ai-sdk/react";
import type { MyUIMessage } from "./api/chat/route";
import { DefaultChatTransport } from "ai";

export default function Chat() {
  // Use custom message type defined on the server (optional for type-safety)
  const { messages } = useChat<MyUIMessage>({
    transport: new DefaultChatTransport({
      api: "/api/chat",
    }),
  });

  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
      {messages.map((m) => (
        <div key={m.id} className="whitespace-pre-wrap">
          {m.role === "user" ? "User: " : "AI: "}
          {m.parts.map((part) => {
            if (part.type === "text") {
              return part.text;
            }
          })}
          {/* Render usage via metadata */}
          {m.metadata?.totalUsage && (
            <div>Total usage: {m.metadata?.totalUsage.totalTokens} tokens</div>
          )}
        </div>
      ))}
    </div>
  );
}
```

You can also access your metadata from the `onFinish` callback of `useChat`:

```tsx
"use client";

import { useChat } from "@ai-sdk/react";
import type { MyUIMessage } from "./api/chat/route";
import { DefaultChatTransport } from "ai";

export default function Chat() {
  // Use custom message type defined on the server (optional for type-safety)
  const { messages } = useChat<MyUIMessage>({
    transport: new DefaultChatTransport({
      api: "/api/chat",
    }),
    onFinish: ({ message }) => {
      // Access message metadata via onFinish callback
      console.log(message.metadata?.totalUsage);
    },
  });
}
```

### Text Streams

`useChat` can handle plain text streams by setting the `streamProtocol` option to `text`:

```tsx filename="app/page.tsx" highlight="7"
"use client";

import { useChat } from "@ai-sdk/react";
import { TextStreamChatTransport } from "ai";

export default function Chat() {
  const { messages } = useChat({
    transport: new TextStreamChatTransport({
      api: "/api/chat",
    }),
  });

  return <>...</>;
}
```

This configuration also works with other backend servers that stream plain text.
Check out the [stream protocol guide](/docs/ai-sdk-ui/stream-protocol) for more information.

<Note>
  When using `TextStreamChatTransport`, tool calls, usage information and finish
  reasons are not available.
</Note>

## Reasoning

Some models such as as DeepSeek `deepseek-r1`
and Anthropic `claude-3-7-sonnet-20250219` support reasoning tokens.
These tokens are typically sent before the message content.
You can forward them to the client with the `sendReasoning` option:

```ts filename="app/api/chat/route.ts" highlight="13"
import { convertToModelMessages, streamText, UIMessage } from "ai";

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const result = streamText({
    model: "deepseek/deepseek-r1",
    messages: await convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse({
    sendReasoning: true,
  });
}
```

On the client side, you can access the reasoning parts of the message object.

Reasoning parts have a `text` property that contains the reasoning content.

```tsx filename="app/page.tsx"
messages.map((message) => (
  <div key={message.id}>
    {message.role === "user" ? "User: " : "AI: "}
    {message.parts.map((part, index) => {
      // text parts:
      if (part.type === "text") {
        return <div key={index}>{part.text}</div>;
      }

      // reasoning parts:
      if (part.type === "reasoning") {
        return <pre key={index}>{part.text}</pre>;
      }
    })}
  </div>
));
```

## Sources

Some providers such as [Perplexity](/providers/ai-sdk-providers/perplexity#sources) and
[Google Generative AI](/providers/ai-sdk-providers/google-generative-ai#sources) include sources in the response.

Currently sources are limited to web pages that ground the response.
You can forward them to the client with the `sendSources` option:

```ts filename="app/api/chat/route.ts" highlight="13"
import { convertToModelMessages, streamText, UIMessage } from "ai";

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const result = streamText({
    model: "perplexity/sonar-pro",
    messages: await convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse({
    sendSources: true,
  });
}
```

On the client side, you can access source parts of the message object.
There are two types of sources: `source-url` for web pages and `source-document` for documents.
Here is an example that renders both types of sources:

```tsx filename="app/page.tsx"
messages.map((message) => (
  <div key={message.id}>
    {message.role === "user" ? "User: " : "AI: "}

    {/* Render URL sources */}
    {message.parts
      .filter((part) => part.type === "source-url")
      .map((part) => (
        <span key={`source-${part.id}`}>
          [
          <a href={part.url} target="_blank">
            {part.title ?? new URL(part.url).hostname}
          </a>
          ]
        </span>
      ))}

    {/* Render document sources */}
    {message.parts
      .filter((part) => part.type === "source-document")
      .map((part) => (
        <span key={`source-${part.id}`}>
          [<span>{part.title ?? `Document ${part.id}`}</span>]
        </span>
      ))}
  </div>
));
```

## Image Generation

Some models such as Google `gemini-2.5-flash-image-preview` support image generation.
When images are generated, they are exposed as files to the client.
On the client side, you can access file parts of the message object
and render them as images.

```tsx filename="app/page.tsx"
messages.map((message) => (
  <div key={message.id}>
    {message.role === "user" ? "User: " : "AI: "}
    {message.parts.map((part, index) => {
      if (part.type === "text") {
        return <div key={index}>{part.text}</div>;
      } else if (part.type === "file" && part.mediaType.startsWith("image/")) {
        return <img key={index} src={part.url} alt="Generated image" />;
      }
    })}
  </div>
));
```

## Attachments

The `useChat` hook supports sending file attachments along with a message as well as rendering them on the client. This can be useful for building applications that involve sending images, files, or other media content to the AI provider.

There are two ways to send files with a message: using a `FileList` object from file inputs or using an array of file objects.

### FileList

By using `FileList`, you can send multiple files as attachments along with a message using the file input element. The `useChat` hook will automatically convert them into data URLs and send them to the AI provider.

<Note>
  Currently, only `image/*` and `text/*` content types get automatically
  converted into [multi-modal content
  parts](/docs/foundations/prompts#multi-modal-messages). You will need to
  handle other content types manually.
</Note>

```tsx filename="app/page.tsx"
"use client";

import { useChat } from "@ai-sdk/react";
import { useRef, useState } from "react";

export default function Page() {
  const { messages, sendMessage, status } = useChat();

  const [input, setInput] = useState("");
  const [files, setFiles] = useState<FileList | undefined>(undefined);
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <div>
        {messages.map((message) => (
          <div key={message.id}>
            <div>{`${message.role}: `}</div>

            <div>
              {message.parts.map((part, index) => {
                if (part.type === "text") {
                  return <span key={index}>{part.text}</span>;
                }

                if (
                  part.type === "file" &&
                  part.mediaType?.startsWith("image/")
                ) {
                  return <img key={index} src={part.url} alt={part.filename} />;
                }

                return null;
              })}
            </div>
          </div>
        ))}
      </div>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (input.trim()) {
            sendMessage({
              text: input,
              files,
            });
            setInput("");
            setFiles(undefined);

            if (fileInputRef.current) {
              fileInputRef.current.value = "";
            }
          }
        }}
      >
        <input
          type="file"
          onChange={(event) => {
            if (event.target.files) {
              setFiles(event.target.files);
            }
          }}
          multiple
          ref={fileInputRef}
        />
        <input
          value={input}
          placeholder="Send message..."
          onChange={(e) => setInput(e.target.value)}
          disabled={status !== "ready"}
        />
      </form>
    </div>
  );
}
```

### File Objects

You can also send files as objects along with a message. This can be useful for sending pre-uploaded files or data URLs.

```tsx filename="app/page.tsx"
"use client";

import { useChat } from "@ai-sdk/react";
import { useState } from "react";
import { FileUIPart } from "ai";

export default function Page() {
  const { messages, sendMessage, status } = useChat();

  const [input, setInput] = useState("");
  const [files] = useState<FileUIPart[]>([
    {
      type: "file",
      filename: "earth.png",
      mediaType: "image/png",
      url: "https://example.com/earth.png",
    },
    {
      type: "file",
      filename: "moon.png",
      mediaType: "image/png",
      url: "data:image/png;base64,iVBORw0KGgo...",
    },
  ]);

  return (
    <div>
      <div>
        {messages.map((message) => (
          <div key={message.id}>
            <div>{`${message.role}: `}</div>

            <div>
              {message.parts.map((part, index) => {
                if (part.type === "text") {
                  return <span key={index}>{part.text}</span>;
                }

                if (
                  part.type === "file" &&
                  part.mediaType?.startsWith("image/")
                ) {
                  return <img key={index} src={part.url} alt={part.filename} />;
                }

                return null;
              })}
            </div>
          </div>
        ))}
      </div>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (input.trim()) {
            sendMessage({
              text: input,
              files,
            });
            setInput("");
          }
        }}
      >
        <input
          value={input}
          placeholder="Send message..."
          onChange={(e) => setInput(e.target.value)}
          disabled={status !== "ready"}
        />
      </form>
    </div>
  );
}
```

## Type Inference for Tools

When working with tools in TypeScript, AI SDK UI provides type inference helpers to ensure type safety for your tool inputs and outputs.

### InferUITool

The `InferUITool` type helper infers the input and output types of a single tool for use in UI messages:

```tsx
import { InferUITool } from "ai";
import { z } from "zod";

const weatherTool = {
  description: "Get the current weather",
  inputSchema: z.object({
    location: z.string().describe("The city and state"),
  }),
  execute: async ({ location }) => {
    return `The weather in ${location} is sunny.`;
  },
};

// Infer the types from the tool
type WeatherUITool = InferUITool<typeof weatherTool>;
// This creates a type with:
// {
//   input: { location: string };
//   output: string;
// }
```

### InferUITools

The `InferUITools` type helper infers the input and output types of a `ToolSet`:

```tsx
import { InferUITools, ToolSet } from "ai";
import { z } from "zod";

const tools = {
  weather: {
    description: "Get the current weather",
    inputSchema: z.object({
      location: z.string().describe("The city and state"),
    }),
    execute: async ({ location }) => {
      return `The weather in ${location} is sunny.`;
    },
  },
  calculator: {
    description: "Perform basic arithmetic",
    inputSchema: z.object({
      operation: z.enum(["add", "subtract", "multiply", "divide"]),
      a: z.number(),
      b: z.number(),
    }),
    execute: async ({ operation, a, b }) => {
      switch (operation) {
        case "add":
          return a + b;
        case "subtract":
          return a - b;
        case "multiply":
          return a * b;
        case "divide":
          return a / b;
      }
    },
  },
} satisfies ToolSet;

// Infer the types from the tool set
type MyUITools = InferUITools<typeof tools>;
// This creates a type with:
// {
//   weather: { input: { location: string }; output: string };
//   calculator: { input: { operation: 'add' | 'subtract' | 'multiply' | 'divide'; a: number; b: number }; output: number };
// }
```

### Using Inferred Types

You can use these inferred types to create a custom UIMessage type and pass it to various AI SDK UI functions:

```tsx
import { InferUITools, UIMessage, UIDataTypes } from "ai";

type MyUITools = InferUITools<typeof tools>;
type MyUIMessage = UIMessage<never, UIDataTypes, MyUITools>;
```

Pass the custom type to `useChat` or `createUIMessageStream`:

```tsx
import { useChat } from "@ai-sdk/react";
import { createUIMessageStream } from "ai";
import type { MyUIMessage } from "./types";

// With useChat
const { messages } = useChat<MyUIMessage>();

// With createUIMessageStream
const stream = createUIMessageStream<MyUIMessage>(/* ... */);
```

This provides full type safety for tool inputs and outputs on the client and server.
