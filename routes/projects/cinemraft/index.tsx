import CinemraftComponent from "@islands/projects/CinemraftComponent.tsx";
import ProjectTemplate from "@components/ProjectTemplate.tsx";
import Markdown from "@components/Markdown.tsx";

export default function Index() {
  const md = `
Move the camera with the mouse, scroll to adjust the zoom level.

### Description

The basic explanation of what CineMraft is, is that it is a voxel world
generator and renderer. Generating a voxel world is simple, simply use
some noise, I use simplex-noise, and fill the world with blocks up to a
height that is described by the noise function of that coordinate.

The tricky part of voxel worlds is primarily to render it. The naive way
to render a voxel world is to just render each cube, but since there are
so many cubes in a world this scales very poorly. A quick and easy
performance boost can be achieved by using instancing when rendering our
cubes, which increases the performance by reducing draw calls, but is
still far from what we can achieve.

The way that I render my chunks, as well as Minecraft to my knowledge,
is that I create a single mesh from a chunk of blocks. I check for every
block if the faces are visible, if they are I add them to the mesh. This
causes a bit more CPU consumption but reduces our GPU consumption
drastically, since there are a lot fewer triangles to draw.

There are ways to improve performance even more, one way is to combine
multiple neighbouring faces on the same plane with the same texture, one
such method is greedy meshing, but I don't plan on doing anything more
complex than naive meshing.
`;
  return (
    <ProjectTemplate title="CineMraft" description={<Markdown src={md} />}>
      <CinemraftComponent />
    </ProjectTemplate>
  );
}
