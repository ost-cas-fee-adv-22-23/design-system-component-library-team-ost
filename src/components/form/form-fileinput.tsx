import React, { FC, DragEvent, useId, useState, useRef, ChangeEvent } from 'react';
import { mergeClassNames } from '../../helpers/merge-class-names';
import { Label, LabelSize } from '../typography/label';
import { FormItem } from './form-item';
import { IconUpload } from '../icons/icon-upload';
import { IconCheckmark } from '../icons/icon-checkmark';
import { IconSize } from '../icons/icon-props';
import { Paragraph, ParagraphSize } from '../typography/paragraph';
import { TextButton, TextButtonColor, TextButtonSize } from '../buttons/text-button';
import { Stack, StackAlignItems, StackDirection, StackSpacing } from '../../layout/stack/stack';

export type FileinputProps = {
  /**
   * Short text to describe the allowed file types and file size
   */
  description: string;
  /**
   * The error message will appear below the fileinput
   */
  errorMessage?: string;
  /**
   * Action to handle the file which is uploaded.
   */
  onAddFile: (file: File) => void;
  /**
   * Title text for the component
   */
  title: string;
};

export const Fileinput: FC<FileinputProps> = ({ description, errorMessage, onAddFile, title }) => {
  const fileinputId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragActive, setDragActive] = useState(false);
  const [isFileSelected, setIsFileSelected] = useState(false);
  const [currentFile, setCurrentFile] = useState('');

  // handle drag events
  const handleDrag = (e: DragEvent<HTMLInputElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  // triggers when file is dropped
  const handleDrop = (e: DragEvent<HTMLInputElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setIsFileSelected(true);
      setCurrentFile(e.dataTransfer.files[0].name);
      onAddFile(e.dataTransfer.files[0]);
    }
  };

  // triggers when file is selected with click
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      setCurrentFile(e.target.files?.[0].name);
      setIsFileSelected(true);
      onAddFile(e.target.files[0]);
    }
  };

  // triggers the input when the button is clicked
  const onButtonClick = () => {
    // Check if inputRef.current is not null for typescript
    inputRef.current?.click();
  };

  const dragAreaBaseStyle = [
    'text-slate-500',
    'w-full h-full',
    'rounded-lg border-2 border-dotted',
    'px-s py-xl bg-slate-100',
  ];
  dragActive && dragAreaBaseStyle.push('bg-slate-300');
  const dragAreaClasses = mergeClassNames([dragAreaBaseStyle]);

  return (
    <Stack direction={StackDirection.col} spacing={StackSpacing.s}>
      <FormItem id={fileinputId} errorMessage={errorMessage}>
        <input className={'hidden'} type="file" ref={inputRef} id={fileinputId} multiple={false} onChange={handleChange} />
        <label htmlFor={fileinputId} className={dragAreaClasses}>
          <div onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}>
            <Stack direction={StackDirection.col} spacing={StackSpacing.xs} alignItems={StackAlignItems.center}>
              {!isFileSelected ? (
                <>
                  <IconUpload size={IconSize.l} />
                  <Label size={LabelSize.xl}>{title}</Label>
                  <Paragraph size={ParagraphSize.m}>{description}</Paragraph>
                </>
              ) : (
                <>
                  <IconCheckmark size={IconSize.l} />
                  <Label size={LabelSize.xl}>Datei geladen</Label>
                  <Paragraph size={ParagraphSize.m}>{`${currentFile} wurde hinzugefügt.`}</Paragraph>
                </>
              )}
            </Stack>
          </div>
        </label>
      </FormItem>
      {/* Textbutton mit Slate-300 existiert gem. Design System nicht, darum wurde der Textbutton-Slate gewählt. */}
      <TextButton color={TextButtonColor.slate} size={TextButtonSize.m} onClick={onButtonClick} icon={<IconUpload />}>
        ...oder Datei auswählen
      </TextButton>
    </Stack>
  );
};
