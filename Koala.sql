--
-- PostgreSQL database dump
--

-- Dumped from database version 17.5
-- Dumped by pg_dump version 17.5

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Attendance; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Attendance" (
    "Staff_id" bigint NOT NULL,
    "Check_in_time" time without time zone NOT NULL,
    "Check_out_time" time without time zone NOT NULL,
    "Date" date NOT NULL
);


ALTER TABLE public."Attendance" OWNER TO postgres;

--
-- Name: Inventory; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Inventory" (
    item_id smallint NOT NULL,
    item_name text NOT NULL,
    quantity_on_hand smallint NOT NULL,
    unit_of_measure text NOT NULL,
    restock_threshold smallint NOT NULL,
    last_restocked_date date NOT NULL,
    "Storagechange_bill_id" bigint NOT NULL
);


ALTER TABLE public."Inventory" OWNER TO postgres;

--
-- Name: Staff; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Staff" (
    "Staff_id" bigint NOT NULL,
    "Name" character varying(25)[] NOT NULL,
    "Role" character varying(15)[] NOT NULL,
    "Contact_Info" bigint NOT NULL
);


ALTER TABLE public."Staff" OWNER TO postgres;

--
-- Name: Staff_Staff_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public."Staff" ALTER COLUMN "Staff_id" ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."Staff_Staff_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Data for Name: Attendance; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Attendance" ("Staff_id", "Check_in_time", "Check_out_time", "Date") FROM stdin;
\.


--
-- Data for Name: Inventory; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Inventory" (item_id, item_name, quantity_on_hand, unit_of_measure, restock_threshold, last_restocked_date, "Storagechange_bill_id") FROM stdin;
\.


--
-- Data for Name: Staff; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Staff" ("Staff_id", "Name", "Role", "Contact_Info") FROM stdin;
\.


--
-- Name: Staff_Staff_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Staff_Staff_id_seq"', 1, false);


--
-- Name: Attendance Attendance_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Attendance"
    ADD CONSTRAINT "Attendance_pkey" PRIMARY KEY ("Staff_id");


--
-- Name: Inventory Inventory_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Inventory"
    ADD CONSTRAINT "Inventory_pkey" PRIMARY KEY (item_id);


--
-- Name: Staff Staff_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Staff"
    ADD CONSTRAINT "Staff_pkey" PRIMARY KEY ("Staff_id");


--
-- Name: Attendance Staff_ID_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Attendance"
    ADD CONSTRAINT "Staff_ID_fkey" FOREIGN KEY ("Staff_id") REFERENCES public."Staff"("Staff_id") ON DELETE RESTRICT;


--
-- PostgreSQL database dump complete
--

