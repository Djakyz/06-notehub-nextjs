"use client";

import Container from "@/components/Container/Container";
import Loader from "@/components/Loader/Loader";
import Section from "@/components/Section/Section";
import { fetchNoteById } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import css from "./NoteDetails.module.css";

const NoteDetailsClient = () => {
  const { id } = useParams<{ id: string }>();
  const { data: note, isLoading } = useQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
    refetchOnMount: false,
  });

  return (
    <Section>
      <Container>
        {note && (
          <div className={css.container}>
            <h2 className={css.title}>{note.title}</h2>{" "}
            <p className={css.content}>{note.content}</p>
            <div className={css.footer}>
              <span className={css.tag}>{note.tag}</span>
            </div>
          </div>
        )}
        {isLoading && <Loader />}
      </Container>
    </Section>
  );
};

export default NoteDetailsClient;
