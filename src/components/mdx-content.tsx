"use client";

import { MDXRemote } from "next-mdx-remote/rsc";
import { ComponentProps } from "react";

interface MDXContentProps {
  source: string;
}

const components = {
  h1: (props: ComponentProps<"h1">) => (
    <h1 className="text-3xl font-bold mb-4" {...props} />
  ),
  h2: (props: ComponentProps<"h2">) => (
    <h2 className="text-2xl font-semibold mb-3 mt-6" {...props} />
  ),
  p: (props: ComponentProps<"p">) => (
    <p className="text-gray-600 mb-4" {...props} />
  ),
  ul: (props: ComponentProps<"ul">) => (
    <ul className="list-disc list-inside mb-4 space-y-2" {...props} />
  ),
  li: (props: ComponentProps<"li">) => (
    <li className="text-gray-600" {...props} />
  ),
};

export async function MDXContent({ source }: MDXContentProps) {
  return (
    <div className="prose max-w-none">
      <MDXRemote source={source} components={components} />
    </div>
  );
}
