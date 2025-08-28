import Container from "@/components/Container/Container";
import Section from "@/components/Section/Section";
import { fetchNotes } from "@/lib/api";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import NotesClient from "./Notes.client";

const Notes = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["notes"],
    queryFn: () => fetchNotes(1, ""),
  });
  return (
    <Section>
      <Container>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <NotesClient />
        </HydrationBoundary>
      </Container>
    </Section>
  );
};

export default Notes;
