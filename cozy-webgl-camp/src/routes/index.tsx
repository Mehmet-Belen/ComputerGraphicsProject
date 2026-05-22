import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "WebGL Camping Scene" },
      { name: "description", content: "Interactive 3D camping scene built with Three.js — fish, water the plant, tend the fire." },
    ],
  }),
});

function Index() {
  return (
    <iframe
      src="/camping.html"
      title="WebGL Camping Scene"
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        border: "none",
      }}
    />
  );
}
