export type CurrencyApiResult = {
  ["gesmes:Envelope"]: Envelope;
};

export type Envelope = {
  ["@_"]: XMLLinks;
  ["Cube"]: EnvelopeCube;
  ["gesmes:Sender"]: Sender;
  ["gesmes:subject"]: string;
};

export type XMLLinks = {
  ["@_xmlns"]: string;
  ["@_xmlns:gesmes"]: string;
};

export type EnvelopeCube = {
  ["Cube"]: CubeCube;
};

export type CubeCube = {
  ["@_"]: CubeTime;
  ["Cube"]: CubeCurrency[];
};

export type CubeCurrency = {
  ["@_"]: CubeCurrencyResult;
};

export type CubeCurrencyResult = {
  ["@_currency"]: string;
  ["@_rate"]: string;
};

export type CubeTime = {
  ["@_time"]: string;
};

export type Sender = {
  ["gesmes:name"]: string;
};
