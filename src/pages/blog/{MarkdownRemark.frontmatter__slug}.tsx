import { graphql } from 'gatsby';
import React from 'react';

interface Props {
  data: {
    markdownRemark: GatsbyTypes.MarkdownRemark;
  };
}

export default function Template({ data }: Props): JSX.Element {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <div className="blog-post-container">
      <div className="blog-post">
        <h1>{frontmatter?.title}</h1>
        <h2>{frontmatter?.date}</h2>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html ?? '' }}
        />
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`;
