export type ShopifyProduct = {
  description: string;
  featuredImage: {
    altText: string;
    height: number;
    id: string;
    url: string;
    width: number;
  };
  handle: string;
  images: {
    nodes: {
      altText: string;
      height: number;
      id: string;
      url: string;
      width: number;
    }[];
  };
  priceRange: {
    minVariantPrice: {
      amount: string;
    };
  };
  tags: string[];
  title: string;
  variants: {
    nodes: {
      sku: string;
    }[];
  };
};
