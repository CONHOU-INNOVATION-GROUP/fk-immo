/* eslint-disable @next/next/no-img-element */
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import Link from "next/link";
import React, { ReactNode } from "react";

type TableProps = {
  data: {
    headers: string[];
    rows: string[][];
  };
};

function Table({ data }: TableProps) {
  const headers = data.headers.map((header, index) => (
    <th key={index} className="px-4 py-2 text-left">
      {header}
    </th>
  ));
  const rows = data.rows.map((row, index) => (
    <tr key={index} className="border-t">
      {row.map((cell, cellIndex) => (
        <td key={cellIndex} className="px-4 py-2">
          {cell}
        </td>
      ))}
    </tr>
  ));

  return (
    <table className="min-w-full my-8 border">
      <thead className="bg-gray-50">
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

type CustomLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
};

function CustomLink({ href, children, ...props }: CustomLinkProps) {
  if (href.startsWith("/")) {
    return (
      <Link href={href} {...props}>
        {children}
      </Link>
    );
  }

  if (href.startsWith("#")) {
    return (
      <a href={href} className="text-blue-600 hover:text-blue-800" {...props}>
        {children}
      </a>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 hover:text-blue-800"
      {...props}
    >
      {children}
    </a>
  );
}

function List({ children }: { children: ReactNode }) {
  return <ul className="list-disc list-inside">{children}</ul>;
}

function ListItem({ children }: { children: ReactNode }) {
  return <li className="mb-2">{children}</li>;
}

function SmartImage({
  alt,
  src,
  ...props
}: React.ImgHTMLAttributes<HTMLImageElement>) {
  if (!src) {
    console.error("SmartImage requires a valid 'src' property.");
    return null;
  }

  return (
    <img
      src={src}
      alt={alt}
      className="rounded-lg w-full object-cover my-8 aspect-video"
      {...props}
    />
  );
}

function createHeading(level: 1 | 2 | 3 | 4 | 5 | 6) {
  const styles = {
    1: "text-4xl font-bold mb-6 mt-8",
    2: "text-3xl font-semibold mb-4 mt-8",
    3: "text-2xl font-medium mb-4 mt-6",
    4: "text-xl font-medium mb-3 mt-6",
    5: "text-lg font-medium mb-2 mt-4",
    6: "text-base font-medium mb-2 mt-4",
  };

  const CustomHeading = ({ children, ...props }: { children: ReactNode }) => {
    switch (level) {
      case 1:
        return (
          <h1 className={styles[1]} {...props}>
            {children}
          </h1>
        );
      case 2:
        return (
          <h2 className={styles[2]} {...props}>
            {children}
          </h2>
        );
      case 3:
        return (
          <h3 className={styles[3]} {...props}>
            {children}
          </h3>
        );
      case 4:
        return (
          <h4 className={styles[4]} {...props}>
            {children}
          </h4>
        );
      case 5:
        return (
          <h5 className={styles[5]} {...props}>
            {children}
          </h5>
        );
      case 6:
        return (
          <h6 className={styles[6]} {...props}>
            {children}
          </h6>
        );
    }
  };

  CustomHeading.displayName = `Heading${level}`;
  return CustomHeading;
}

function Paragraph({ children }: { children: ReactNode }) {
  return (
    <p className="text-gray-700 leading-relaxed mb-4 text-base">{children}</p>
  );
}

const components = {
  p: Paragraph,
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  img: SmartImage,
  a: CustomLink,
  Table,
  ul: List,
  li: ListItem,
};

type CustomMDXProps = MDXRemoteProps & {
  components?: typeof components;
};

export function CustomMDX(props: CustomMDXProps) {
  return (
    <div className="prose prose-lg prose-gray max-w-none">
      <MDXRemote
        {...props}
        components={{ ...components, ...(props.components || {}) }}
      />
    </div>
  );
}
