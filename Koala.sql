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
-- Name: Booking; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Booking" (
    booking_id bigint NOT NULL,
    membership_id bigint NOT NULL,
    resource_id bigint NOT NULL,
    start_time timestamp without time zone NOT NULL,
    end_time timestamp without time zone NOT NULL,
    booked_by_guest boolean NOT NULL
);


ALTER TABLE public."Booking" OWNER TO postgres;

--
-- Name: Computers; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Computers" (
    computer_id bigint NOT NULL,
    status boolean NOT NULL,
    last_used timestamp without time zone NOT NULL
);


ALTER TABLE public."Computers" OWNER TO postgres;

--
-- Name: Customers; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Customers" (
    membership_id bigint NOT NULL,
    first_name character varying NOT NULL,
    last_name character varying NOT NULL,
    phone bigint NOT NULL,
    email character varying NOT NULL,
    "Address" text NOT NULL,
    "Start_date" date NOT NULL,
    "End_date" date NOT NULL,
    payment_id character varying NOT NULL,
    "Status" boolean NOT NULL
);


ALTER TABLE public."Customers" OWNER TO postgres;

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
-- Name: Memebership; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Memebership" (
    membership_id bigint NOT NULL,
    member_name text NOT NULL,
    start_date date NOT NULL,
    end_date date NOT NULL,
    status boolean NOT NULL
);


ALTER TABLE public."Memebership" OWNER TO postgres;

--
-- Name: Payment_methods; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Payment_methods" (
    payment_id character varying(10) NOT NULL,
    payment_method_id text NOT NULL,
    last_four integer NOT NULL,
    payment_token character varying NOT NULL
);


ALTER TABLE public."Payment_methods" OWNER TO postgres;

--
-- Name: Payments; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Payments" (
    payment_id character varying NOT NULL,
    membership_id bigint NOT NULL,
    amount integer NOT NULL,
    payment_date date NOT NULL,
    "Description" text
);


ALTER TABLE public."Payments" OWNER TO postgres;

--
-- Name: Rooms; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Rooms" (
    room_id bigint NOT NULL,
    room_type text NOT NULL,
    status boolean NOT NULL,
    last_used_date date NOT NULL
);


ALTER TABLE public."Rooms" OWNER TO postgres;

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
-- Data for Name: Booking; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Booking" (booking_id, membership_id, resource_id, start_time, end_time, booked_by_guest) FROM stdin;
\.


--
-- Data for Name: Computers; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Computers" (computer_id, status, last_used) FROM stdin;
\.


--
-- Data for Name: Customers; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Customers" (membership_id, first_name, last_name, phone, email, "Address", "Start_date", "End_date", payment_id, "Status") FROM stdin;
\.


--
-- Data for Name: Inventory; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Inventory" (item_id, item_name, quantity_on_hand, unit_of_measure, restock_threshold, last_restocked_date, "Storagechange_bill_id") FROM stdin;
\.


--
-- Data for Name: Memebership; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Memebership" (membership_id, member_name, start_date, end_date, status) FROM stdin;
\.


--
-- Data for Name: Payment_methods; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Payment_methods" (payment_id, payment_method_id, last_four, payment_token) FROM stdin;
\.


--
-- Data for Name: Payments; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Payments" (payment_id, membership_id, amount, payment_date, "Description") FROM stdin;
\.


--
-- Data for Name: Rooms; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Rooms" (room_id, room_type, status, last_used_date) FROM stdin;
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
-- Name: Booking Booking_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Booking"
    ADD CONSTRAINT "Booking_pkey" PRIMARY KEY (booking_id);


--
-- Name: Computers Computers_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Computers"
    ADD CONSTRAINT "Computers_pkey" PRIMARY KEY (computer_id);


--
-- Name: Customers Customers_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Customers"
    ADD CONSTRAINT "Customers_pkey" PRIMARY KEY (membership_id, phone);


--
-- Name: Inventory Inventory_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Inventory"
    ADD CONSTRAINT "Inventory_pkey" PRIMARY KEY (item_id);


--
-- Name: Memebership Memebership_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Memebership"
    ADD CONSTRAINT "Memebership_pkey" PRIMARY KEY (membership_id);


--
-- Name: Payment_methods Payment_methods_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Payment_methods"
    ADD CONSTRAINT "Payment_methods_pkey" PRIMARY KEY (payment_id);


--
-- Name: Payments Payments_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Payments"
    ADD CONSTRAINT "Payments_pkey" PRIMARY KEY (payment_id);


--
-- Name: Rooms Rooms_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Rooms"
    ADD CONSTRAINT "Rooms_pkey" PRIMARY KEY (room_id);


--
-- Name: Staff Staff_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Staff"
    ADD CONSTRAINT "Staff_pkey" PRIMARY KEY ("Staff_id");


--
-- Name: Payments Membership_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Payments"
    ADD CONSTRAINT "Membership_id_fkey" FOREIGN KEY (membership_id) REFERENCES public."Memebership"(membership_id);


--
-- Name: Payment_methods Payment_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Payment_methods"
    ADD CONSTRAINT "Payment_fkey" FOREIGN KEY (payment_id) REFERENCES public."Payments"(payment_id);


--
-- Name: Customers Payment_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Customers"
    ADD CONSTRAINT "Payment_id" FOREIGN KEY (payment_id) REFERENCES public."Payments"(payment_id);


--
-- Name: Attendance Staff_ID_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Attendance"
    ADD CONSTRAINT "Staff_ID_fkey" FOREIGN KEY ("Staff_id") REFERENCES public."Staff"("Staff_id") ON DELETE RESTRICT;


--
-- Name: Customers member_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Customers"
    ADD CONSTRAINT member_fkey FOREIGN KEY (membership_id) REFERENCES public."Memebership"(membership_id);


--
-- PostgreSQL database dump complete
--

