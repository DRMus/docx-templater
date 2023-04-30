import React, { useContext } from "react";

import { DatePicker, Form, Input } from "antd";
import { MainContextValue } from "../Main/MainContext";

import styles from "./DocxContent.module.scss";
import FormItemInput from "./FormItemInput";
import DocxP from "./DocxP";
import DocxOl from "./DocxOl";

const DocxContent = () => {
  const { formRef, onSubmit } = useContext(MainContextValue);
  return (
    <div style={{ padding: 24, minHeight: 360, background: "white", fontSize: "14px" }}>
      <Form onFinish={onSubmit} ref={formRef} style={{maxWidth: 1300, margin: "0 auto"}}>
        <div className={styles.docxHeader}>
          <DocxP className={styles.docxHeaderItem}>
            <span>Отчет куратора</span>
            <FormItemInput name="fio_cur" type="text" placeholder="ФИО куратора" />
            <span>группы</span>
            <FormItemInput name="group_name" type="text" placeholder="Группа" />
            <span>, за период</span>
            <FormItemInput
              name="date_range_MY"
              type="range"
              placeholder="Период"
              pickerType="month"
            />
            <span>учебного года</span>
            <FormItemInput
              name="date_range_YY"
              type="range"
              placeholder="Учебный год"
              pickerType="year"
            />
          </DocxP>
          <DocxP className={styles.docxHeaderItem}>
            <span>
              Критерии и показатели эффективности деятельности кураторов академической группы ФИСТа
            </span>
          </DocxP>
        </div>
        <div className={styles.docxContentBox}>
          <DocxOl>
            <li>
              Ведение и оформление нормативной документации{" "}
              <DocxOl className={styles.innerOl}>
                <li>
                  Ведение журнала куратора
                  <DocxOl className={styles.innerOl}>
                    <li>Своевременность заполнения (оценивается ежемесячно)</li>
                    <DocxP>Вёлся ежедневно (1 акад. ч. в день);</DocxP>
                    <DocxP>
                      <FormItemInput
                        name="date_li_1_1_1_idx0"
                        type="date"
                        placeholder="Учебный год"
                      />{" "}
                      заполненный за{" "}
                      <FormItemInput
                        name="date_li_1_1_1_idx1"
                        type="date"
                        placeholder="Учебный год"
                        pickerType="month"
                      />{" "}
                      отчет о работе куратора, а также план работ на{" "}
                      <FormItemInput
                        name="date_li_1_1_1_idx2"
                        type="date"
                        placeholder="Учебный год"
                        pickerType="month"
                      />{" "}
                      высланы на эл. почту Ларионовой О.Б.;
                    </DocxP>
                    <DocxP>
                      <FormItemInput
                        name="date_li_1_1_1_idx3"
                        type="date"
                        placeholder="Учебный год"
                      />{" "}
                      подписанный план работ на{" "}
                      <FormItemInput
                        name="date_li_1_1_1_idx4"
                        type="date"
                        placeholder="Учебный год"
                        pickerType="month"
                      />{" "}
                      хранится на кафедре "ВТ" и сдан Ларионовой О.Б.
                    </DocxP>
                  </DocxOl>
                </li>
                <li>
                  Наличие плана работы с группой на след. за отчётным месяцем (оценивается
                  ежемесячно)
                  <DocxOl className={styles.innerOl}>
                    <li>
                      Своевременность заполнения
                      <DocxP>
                        <FormItemInput
                          name="date_li_1_2_1_idx0"
                          type="date"
                          placeholder="Учебный год"
                        />{" "}
                        - подготовка плана работы с группами на{" "}
                        <FormItemInput
                          name="date_li_1_2_1_idx1"
                          type="date"
                          placeholder="Учебный год"
                          pickerType="month"
                        />
                      </DocxP>
                      <DocxP>
                        План на{" "}
                        <FormItemInput
                          name="date_li_1_2_1_idx2"
                          type="date"
                          placeholder="Учебный год"
                          pickerType="month"
                        />{" "}
                        был отправлен по электронной почте{" "}
                        <FormItemInput
                          name="date_li_1_2_1_idx3"
                          type="date"
                          placeholder="Учебный год"
                        />{" "}
                        Ларионовой О.Б. (+ оригинал на кафедре "ВТ").
                      </DocxP>
                    </li>
                  </DocxOl>
                </li>
              </DocxOl>
            </li>
            <li>
              Контроль результатов учебной деятельности студентов
              <DocxOl className={styles.innerOl}>
                <li>
                  Организация и проведение родительских собраний
                  <DocxOl className={styles.innerOl}>
                    <li>
                      Кол-во собраний
                      <DocxP>
                        Родительские собрания в{" "}
                        <FormItemInput name="text_li_2_1_1_idx0" type="text" placeholder="Месяц" />{" "}
                        не проводились
                      </DocxP>
                    </li>
                    <li>
                      Кол-во участников (родителей студентов, проживающих городе, не менее 70%
                      родителей)
                      <DocxP>75 % от общего числа родителей присутствовали на собрании</DocxP>
                    </li>
                  </DocxOl>
                </li>
                <li>
                  Проведение кураторских часов в группах
                  <DocxOl className={styles.innerOl}>
                    <li>
                      Своевременность проведения мероприятия
                      <DocxP className={styles.dBlock}>
                        <FormItemInput
                          name="date_li_2_2_1_idx0"
                          type="date"
                          placeholder="Учебный год"
                        />
                        Организационное собрание дистанционном формате в системе Discord по вопросам
                        структуры и содержания учебного процесса в университете на новый{" "}
                        <b>[Учебный год из оглавления] </b>
                        учебного года: учебный план, основные виды занятий. Объявление о новом
                        времени начала занятий. Вход, регистрация и работа в личном кабинете.
                      </DocxP>
                    </li>
                  </DocxOl>
                </li>
                <li>
                  Итоги текущей и промежуточной аттестации
                  <DocxOl className={styles.innerOl}>
                    <li>
                      Посещаемость студентов в группе (90% от общего кол-ва студентов ежемесячно)
                      <DocxP>
                        <FormItemInput
                          name="date_li_2_3_1_idx0"
                          type="date"
                          placeholder="Учебный год"
                        />{" "}
                        - информирование старосты группы о необходимости предоставления копий листов
                        журнала посещаемости за{" "}
                        <FormItemInput name="text_li_2_3_1_idx1" type="text" placeholder="Месяц" />{" "}
                        <FormItemInput
                          name="date_li_2_3_1_idx2"
                          type="date"
                          placeholder="Учебный год"
                        />{" "}
                        - сообщение в ВКонтакте.
                      </DocxP>
                      <DocxP>
                        <FormItemInput
                          name="date_li_2_3_1_idx3"
                          type="date"
                          placeholder="Учебный год"
                        />{" "}
                        (2 акад. ч.) - получение копий журналов посещаемости (листы за{" "}
                        <FormItemInput name="text_li_2_3_1_idx4" type="text" placeholder="Месяц" />)
                        - фото листов, их распечатка, подведение по ним итогов.
                      </DocxP>
                      <DocxP>
                        Итоги: из{" "}
                        <FormItemInput
                          name="number_li_2_3_1_idx5"
                          type="number"
                          placeholder="Дней"
                        />{" "}
                        учебных дней:
                      </DocxP>
                      <DocxP>
                        <FormItemInput
                          name="number_li_2_3_1_idx6"
                          type="number"
                          placeholder="Чел"
                        />
                        студент(а, ов) отсутствовал(и) учебных дней в количестве{" "}
                        <FormItemInput
                          name="number_li_2_3_1_idx7"
                          type="number"
                          placeholder="Чел"
                        />{" "}
                        по причине участия в соревнованиях,
                      </DocxP>
                      <DocxP>
                        <FormItemInput
                          name="number_li_2_3_1_idx8"
                          type="number"
                          placeholder="Чел"
                        />{" "}
                        студент(а, ов) отсутствовали учебных дней в количестве{" "}
                        <FormItemInput
                          name="number_li_2_3_1_idx9"
                          type="number"
                          placeholder="Чел"
                        />{" "}
                        по причине болезни,
                      </DocxP>
                      <DocxP>
                        <FormItemInput
                          name="number_li_2_3_1_idx9"
                          type="number"
                          placeholder="Чел"
                        />{" "}
                        студент(а, ов) отсутствовали учебных дней в количестве{" "}
                        <FormItemInput
                          name="number_li_2_3_1_idx10"
                          type="number"
                          placeholder="Чел"
                        />
                        , причин отсутствия не сообщали
                      </DocxP>
                      <DocxP>
                        Медицинские справки хранятся на кафедре ВТ. Копия журнала посещаемости на
                        кафедре ВТ.
                      </DocxP>
                    </li>
                    <li>
                    Кол-во неаттестованных студентов по итогам текущей аттестации (Не более 5% от общего кол-ва студентов)
                    </li>
                    <li>Кол-во неаттестованных студентов по итогам промежуточной аттестации (сессия).	Не более 30% от общего кол-ва студентов.</li>
                  </DocxOl>
                </li>
              </DocxOl>
            </li>
          </DocxOl>
        </div>
      </Form>
    </div>
  );
};

export default DocxContent;
