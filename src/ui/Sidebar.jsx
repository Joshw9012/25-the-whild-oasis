import styled from "styled-components";

const StledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 2px solid var(--color-grey-100);

  grid-row: 1/-1;
`;

function Sidebar() {
  return <StledSidebar>Sidebar</StledSidebar>;
}

export default Sidebar;
